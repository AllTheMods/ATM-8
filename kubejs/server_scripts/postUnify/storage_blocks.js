//priority:900
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes

// Missing tags for unify
ServerEvents.tags('item', event => {
  event.add('forge:storage_blocks/raw_aluminum', 'xycraft_world:aluminum_raw_block')
  global.blueskies.forEach(metal => {
    event.add(`forge:storage_blocks/raw_${metal}`, `blue_skies:raw_${metal}_block`)
    event.add(`forge:storage_blocks/${metal}`, `blue_skies:${metal}_block`)
    event.add(`forge:storage_blocks/raw_materials`, `blue_skies:raw_${metal}_block`)
  })
})

ServerEvents.recipes(event => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Storage Blocks')
  }
  let storageTags = global.auTags.filter(function (val) {
    return /forge:storage_blocks/.test(val)
  })
  let storageCount = {
    ie: 0,
    thermal: 0
  }
  storageTags.forEach(storageTagString => {
    let material = storageTagString.replace('forge:storage_blocks/', '')
    let raw = false
    if (/raw_/.test(material)) {
      raw = true
      material = material.replace('raw_', '')
    }
    let storage = AlmostUnified.getPreferredItemForTag(storageTagString)
    if (storage.isEmpty()) {
      console.log(`${material} does not have a storage_blocks tag entry`)
      return
    }
    let ingotTagString = `forge:ingots/${material}`
    if (AlmostUnified.getPreferredItemForTag(ingotTagString).isEmpty()) {
      ingotTagString = `forge:gems/${material}`
    }
    if (raw) {
      ingotTagString = `forge:raw_materials/${material}`
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
            if (global.ingredientCheck(storage, result.get('base_ingredient'))) {
              count++
            }
          } else if (global.ingredientCheck(storage, result)) {
            count++
          }
        })
        if (count == 0) {
          event.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_packing_9',
            input: {
              count: 9,
              base_ingredient: ingotTag.toJson()
            },
            result: storage.toJson(),
            energy: 2400
          }).id(`kubejs:immersiveengineering/metalpress/packing3x3/${raw ? 'raw_' : ''}${material}`)
          storageCount.ie++
        }
      }
      if (global.loaded.Thermal_Loaded) {
        // Check if thermal multiservo press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'thermal:press' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('result').forEach(item => {
            if (storage.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              ingotTag.withCount(9).toJson(),
              Ingredient.of('thermal:press_packing_3x3_die').toJson(),
            ],
            result: [storage.toJson()],
          }).id(`kubejs:thermal/machines/press/packing3x3/press_${raw ? 'raw_' : ''}${material}_packing`)
          storageCount.thermal++
        }
      }
    }
  })
  if (global.devLogging) {
    console.log(`Added Storage Block Recipes - IE: ${storageCount.ie}, Thermal: ${storageCount.thermal}`)
    // Added Storage Block Recipes - IE: 62, Thermal: 0
  }
})
