//priority:650
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes

// Missing tags for unify
ServerEvents.tags('item', event => {
  ['falsite', 'ventium', 'horizonite'].forEach(metal => {
    event.add(`forge:nuggets/${metal}`, `blue_skies:${metal}_nugget`)
  })
})

ServerEvents.recipes(event => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Nuggets')
  }
  let nuggetTags = global.auTags.filter(function (val) {
    return /forge:nuggets/.test(val)
  })
  let nuggetCount = {
    ie: 0,
    thermal: 0
  }
  nuggetTags.forEach(nuggetTagString => {
    let material = nuggetTagString.replace('forge:nuggets/', '')
    let nugget = AlmostUnified.getPreferredItemForTag(nuggetTagString)
    if (nugget.isEmpty()) {
      console.log(`${material} does not have a nugget tag entry`)
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
            if (global.ingredientCheck(nugget, result.get('base_ingredient'))) {
              count++
            }
          } else if (global.ingredientCheck(nugget, result)) {
            count++
          }
        })
        if (count == 0) {
          event.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_unpacking',
            input: ingotTag.toJson(),
            result: nugget.withCount(9).toJson(),
            energy: 2400
          }).id(`kubejs:immersiveengineering/metalpress/unpacking/nugget_${material}`)
          nuggetCount.ie++
        }
      }
      if (global.loaded.Thermal_Loaded) {
        // Check if thermal multiservo press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'thermal:press' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('result').forEach(item => {
            if (nugget.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              ingotTag.toJson(),
              Ingredient.of('thermal:press_unpacking_die').toJson(),
            ],
            result: [nugget.withCount(9).toJson()],
          }).id(`kubejs:thermal/machines/press/unpacking/press_${material}_nugget_unpacking`)
          nuggetCount.thermal++
        }
      }
    }
  })
  if (global.devLogging) {
    console.log(`Added Nugget Recipes - IE: ${nuggetCount.ie}, Thermal: ${nuggetCount.thermal}`)
    // Added Nugget Recipes - IE: 32, Thermal: 0
  }
})
