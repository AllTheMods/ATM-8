//priority:700
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes

// Missing tags for unify
ServerEvents.tags('item', event => {
  ['falsite', 'ventium', 'horizonite'].forEach(metal => {
    event.add(`forge:ingots/${metal}`, `blue_skies:${metal}_ingot`)
  })
})

ServerEvents.recipes(event => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Ingots')
  }
  let ingotTags = global.auTags.filter(function (val) {
    return /forge:ingots/.test(val)
  })
  let ingotCount = {
    ie: 0,
    thermal: 0
  }
  ingotTags.forEach(ingotTagString => {
    let material = ingotTagString.replace('forge:ingots/', '')
    let ingot = AlmostUnified.getPreferredItemForTag(ingotTagString)
    if (ingot.isEmpty()) {
      console.log(`${material} does not have a ingot tag entry`)
      return
    }
    let isAlloy = global.alloys.includes(material)
    let storageTag = Ingredient.of(`#forge:storage_blocks/${material}`)
    if (!AlmostUnified.getPreferredItemForTag(`forge:storage_blocks/${material}`).isEmpty()) {
      if (global.loaded.IE_Loaded) {
        // Check if ie metal press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
          let recipeJson = recipe.json
          let result = recipeJson.get('result')
          if (result.has('base_ingredient')) {
            if (global.ingredientCheck(ingot, result.get('base_ingredient'))) {
              count++
            }
          } else if (global.ingredientCheck(ingot, result)) {
            count++
          }
        })
        if (count == 0) {
          let recipe = {
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_unpacking',
            input: storageTag.toJson(),
            result: ingot.withCount(9).toJson(),
            energy: 2400
          }
          event.custom(recipe).id(`kubejs:immersiveengineering/metalpress/unpacking/block_${material}`)
          ingotCount.ie++
        }
      }
      if (global.loaded.Thermal_Loaded) {
        // Check if thermal multiservo press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'thermal:press' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('result').forEach(item => {
            if (ingot.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              storageTag.toJson(),
              Ingredient.of('thermal:press_unpacking_die').toJson(),
            ],
            result: [ingot.withCount(9).toJson()],
          }).id(`kubejs:thermal/machines/press/unpacking/press_${material}_unpacking`)
          ingotCount.thermal++
        }
      }
    }
    let nuggetTag = Ingredient.of(`#forge:nuggets/${material}`)
    if (!AlmostUnified.getPreferredItemForTag(`forge:nuggets/${material}`).isEmpty()) {
      if (global.loaded.IE_Loaded) {
        // Check if ie metal press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
          let recipeJson = recipe.json
          let result = recipeJson.get('result')
          if (result.has('base_ingredient')) {
            if (global.ingredientCheck(ingot, result.get('base_ingredient'))) {
              count++
            }
          } else if (global.ingredientCheck(ingot, result)) {
            count++
          }
        })
        if (count == 0) {
          event.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_packing_9',
            input: {
              count: 9,
              base_ingredient: nuggetTag.toJson()
            },
            result: ingot.toJson(),
            energy: 2400
          }).id(`kubejs:immersiveengineering/metalpress/packing3x3/${material}_nugget`)
          ingotCount.ie++
        }
      }
      if (global.loaded.Thermal_Loaded) {
        // Check if thermal multiservo press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'thermal:press' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('result').forEach(item => {
            if (ingot.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              nuggetTag.withCount(9).toJson(),
              Ingredient.of('thermal:press_packing_3x3_die').toJson(),
            ],
            result: [ingot.toJson()],
          }).id(`kubejs:thermal/machines/press/packing3x3/press_${material}_nugget_packing`)
          ingotCount.thermal++
        }
      }
    }
    if (isAlloy) {
      /*
      TODO include alloying recipes across all alloying machines
      create mixing
      thermal induction smelter
      ie alloy kiln
      ie arc furnace
      */
    } else {
      /*
      TODO include/check ore/raw/raw_storage/chunk/dust to ingot recipes that might be missing
      most take their recipes from vanilla smelting/blasting
      special cases:
      ie arc furnace
          dust -> ingot
          ore -> 2 ingot, 1 ie slag
          raw ore -> 1 ingot, 1 ingot (50%)
          raw ore storage -> 13 ingots, 1 ingot (50%)
      thermal induction smelter
      */
    }
  })
  if (global.devLogging) {
    console.log(`Added Ingot Recipes - IE: ${ingotCount.ie}, Thermal: ${ingotCount.thermal}`)
    // Added Ingot Recipes - IE: 68, Thermal: 0
  }
})
