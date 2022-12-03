//priority:450
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes
ServerEvents.recipes(event => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Rods')
  }
  let rodTags = global.auTags.filter(function (val) {
    return /forge:rods/.test(val)
  })
  let rodCount = {
    create: 0,
    ftbic: 0,
    ie: 0,
    thermal: 0
  }
  rodTags.forEach(rodTagString => {
    let material = rodTagString.replace('forge:rods/', '')
    let rod = AlmostUnified.getPreferredItemForTag(rodTagString)
    if (rod.isEmpty()) {
      console.log(`${material} does not have a rod tag entry`)
      return
    }
    let ingotTagString = `forge:ingots/${material}`
    if (AlmostUnified.getPreferredItemForTag(ingotTagString).isEmpty()) {
      ingotTagString = `forge:gems/${material}`
    }
    if (!AlmostUnified.getPreferredItemForTag(ingotTagString).isEmpty()) {
      let ingotTag = Ingredient.of(`#${ingotTagString}`)
      if (global.loaded.CreateAdd_Loaded) {
        // Check if create additions rolling recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'createaddition:rolling' }, recipe => {
          let recipeJson = recipe.json
          if (global.ingredientCheck(rod, recipeJson.get('result'))) {
            count++
          }
        })
        if (count == 0) {
          event.custom({
            type: 'createaddition:rolling',
            input: ingotTag.toJson(),
            result: rod.withCount(2).toJson()
          }).id(`kubejs:createaddition/rolling/${material}_ingot`)
          rodCount.create++
        }
      }
      if (global.loaded.FTBIC_Loaded) {
        // Check if ftbic extruding recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'ftbic:extruding' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('outputItems').forEach(item => {
            if (rod.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'ftbic:extruding',
            inputItems: [{ "count": 1, "ingredient": ingotTag.toJson() }],
            outputItems: [rod.withCount(2).toJson()]
          }).id(`kubejs:ftbic/extruding/ingots/${material}_to_${material}_rod`)
          rodCount.ftbic++
        }
      }
      if (global.loaded.IE_Loaded) {
        // Check if ie metal press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
          let recipeJson = recipe.json
          let result = recipeJson.get('result')
          if (result.has('base_ingredient')) {
            if (global.ingredientCheck(rod, result.get('base_ingredient'))) {
              count++
            }
          } else if (global.ingredientCheck(rod, result)) {
            count++
          }
        })
        if (count == 0) {
          event.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_rod',
            input: ingotTag.toJson(),
            result: {
              count: 2,
              base_ingredient: rod.toJson()
            },
            energy: 2400
          }).id(`kubejs:immersiveengineering/metalpress/rod_${material}`)
          rodCount.ie++
        }
      }
      /*
      if (global.loaded.Thermal_Loaded) {
          // add blast chiller recipes? cross check with tconstruct
      }*/
    }
  })
  if (global.devLogging) {
    console.log(`Added Rod Recipes - CreateAdditions: ${rodCount.create}, FTBIC: ${rodCount.ftbic}, IE: ${rodCount.ie}, Thermal: ${rodCount.thermal}`)
    // Added Rod Recipes - CreateAdditions: 20, FTBIC: 16, IE: 8, Thermal: 0
  }
})
