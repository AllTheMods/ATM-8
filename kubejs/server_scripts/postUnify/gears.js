//priority:400
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes
ServerEvents.recipes(event => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Gears')
  }
  let gearTags = global.auTags.filter(function (val) {
    return /forge:gears/.test(val)
  })
  let gearCount = {
    ftbic: 0,
    ie: 0,
    thermal: 0
  }
  gearTags.forEach(gearTagString => {
    let material = gearTagString.replace('forge:gears/', '')
    let gear = AlmostUnified.getPreferredItemForTag(gearTagString)
    if (gear.isEmpty()) {
      console.log(`${material} does not have a gear tag entry`)
      return
    }
    let ingotTagString = `forge:ingots/${material}`
    if (AlmostUnified.getPreferredItemForTag(ingotTagString).isEmpty()) {
      ingotTagString = `forge:gems/${material}`
    }
    if (!AlmostUnified.getPreferredItemForTag(ingotTagString).isEmpty()) {
      let ingotTag = Ingredient.of(`#${ingotTagString}`)
      if (global.loaded.IE_Loaded) {
        // Check if ie metal press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
          let recipeJson = recipe.json
          let result = recipeJson.get('result')
          if (result.has('base_ingredient')) {
            if (global.ingredientCheck(gear, result.get('base_ingredient'))) {
              count++
            }
          } else if (global.ingredientCheck(gear, result)) {
            count++
          }
        })
        if (count == 0) {
          event.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_gear',
            input: {
              count: 4,
              base_ingredient: ingotTag.toJson()
            },
            result: gear.toJson(),
            energy: 2400
          }).id(`kubejs:immersiveengineering/metalpress/gear_${material}`)
          gearCount.ie++
        }
      }
      if (global.loaded.Thermal_Loaded) {
        // Check if thermal multiservo press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'thermal:press' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('result').forEach(item => {
            if (gear.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              ingotTag.withCount(4).toJson(),
              Ingredient.of('thermal:press_gear_die').toJson(),
            ],
            result: [gear.toJson()],
          }).id(`kubejs:thermal/machines/press/press_${material}_ingot_to_gear`)
          gearCount.thermal++
        }
      }
    }
    if (global.loaded.FTBIC_Loaded) {
      let plateTag = Ingredient.of(`#forge:plates/${material}`)
      if (!AlmostUnified.getPreferredItemForTag(`forge:plates/${material}`).isEmpty()) {
        // Check if ftbic extruding recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'ftbic:extruding' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('outputItems').forEach(item => {
            if (gear.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'ftbic:extruding',
            inputItems: [{ "count": 4, "ingredient": plateTag.toJson() }],
            outputItems: [gear.withCount(1).toJson()]
          }).id(`kubejs:ftbic/extruding/ingots/${material}_to_${material}_gear`)
          gearCount.ftbic++
        }
      }
    }
  })
  if (global.devLogging) {
    console.log(`Added Gear Recipes - FTBIC: ${gearCount.ftbic}, IE: ${gearCount.ie}, Thermal: ${gearCount.thermal}`)
    // Added Gear Recipes - FTBIC: 16, IE: 8, Thermal: 0
  }
})
