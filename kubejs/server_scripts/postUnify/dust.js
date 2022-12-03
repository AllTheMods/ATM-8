// priority:950
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes

ServerEvents.recipes(event => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Dusts')
  }
  let dustTags = global.auTags.filter(function (val) {
    return /forge:dusts/.test(val)
  })
  let dustCount = {
    occult: 0,
    ftbic: 0
  }
  dustTags.forEach(dustTagString => {
    let material = dustTagString.replace('forge:dusts/', '')
    let dust = AlmostUnified.getPreferredItemForTag(dustTagString)
    if (dust.isEmpty()) {
      console.log(`${material} does not have a dust tag entry`)
      return
    }
    let ingot = AlmostUnified.getPreferredItemForTag(`forge:ingots/${material}`)
    let ore = AlmostUnified.getPreferredItemForTag(`forge:ores/${material}`)
    let raw_material = AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${material}`)
    let raw_block = AlmostUnified.getPreferredItemForTag(`forge:storage_blocks/raw_${material}`)
    // Occultism Crusher
    if (global.loaded.Occult_Loaded) {
      let crush = {
        ingot: false,
        ore: false,
        raw: false
      }
      event.forEachRecipe({ type: "occultism:crushing" }, recipe => {
        let recipeJson = recipe.json
        if (dust.equalsIgnoringCount(Item.of(recipeJson.get('result')))) {
          let input = recipeJson.get('ingredient')
          if (!ingot.isEmpty() && global.ingredientCheck(ingot, input)) {
            crush.ingot = true
          } else if (!ore.isEmpty() && global.ingredientCheck(ore, input)) {
            crush.ore = true
          } else if (!raw_material.isEmpty() && global.ingredientCheck(raw_material, input)) {
            crush.raw = true
          }
        }
      })
      let recipe = {
        type: "occultism:crushing",
        ingredient: {},
        result: {},
        crushing_time: 200,
        ignore_crushing_multiplier: true
      }
      if (!ingot.isEmpty() && !crush.ingot) {
        let ingotRecipe = recipe
        ingotRecipe.ingredient = Ingredient.of(`#forge:ingots/${material}`).toJson()
        ingotRecipe.result = dust.withCount(1).toJson()
        event.custom(ingotRecipe).id(`kubejs:occultism/crushing/${material}_dust_from_ingot`)
        dustCount.occult++
      }
      if (!raw_material.isEmpty() && !crush.raw) {
        let rawRecipe = recipe
        rawRecipe.ingredient = Ingredient.of(`#forge:raw_materials/${material}`).toJson()
        rawRecipe.result = dust.withCount(2).toJson()
        rawRecipe.ignore_crushing_multiplier = false
        event.custom(rawRecipe).id(`kubejs:occultism/crushing/${material}_dust_from_raw_material`)
        dustCount.occult++
      }
      if (!ore.isEmpty() && !crush.ore) {
        let oreRecipe = recipe
        oreRecipe.ingredient = Ingredient.of(`#forge:ores/${material}`).toJson()
        oreRecipe.result = dust.withCount(2).toJson()
        oreRecipe.crushing_time = 300
        oreRecipe.ignore_crushing_multiplier = false
        event.custom(oreRecipe).id(`kubejs:occultism/crushing/${material}_dust`)
        dustCount.occult++
      }
    }
    // FTBIC Macerating
    if (global.loaded.FTBIC_Loaded) {
      let macerate = {
        ingot: false,
        ore: false,
        raw: false,
      }
      event.forEachRecipe({ type: 'ftbic:macerating' }, recipe => {
        let recipeJson = recipe.json
        recipeJson.get('outputItems').forEach(item => {
          if (dust.equalsIgnoringCount(Item.of(item))) {
            recipeJson.get('inputItems').forEach(inputJson => {
              let input = inputJson.get('ingredient')
              if (!ingot.isEmpty() && global.ingredientCheck(ingot, input)) {
                macerate.ingot = true
              } else if (!ore.isEmpty() && global.ingredientCheck(ore, input)) {
                macerate.ore = true
              } else if (!raw_material.isEmpty() && global.ingredientCheck(raw_material, input)) {
                macerate.raw = true
              }
            })
          }
        })
      })
      if (!ingot.isEmpty() && !macerate.ingot) {
        event.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: Ingredient.of(`#forge:ingots/${material}`).toJson() }],
          "outputItems": [dust.toJson()]
        }).id(`kubejs:ftbic/macerating/ingots/${material}_to_dust`)
        dustCount.ftbic++
      }
      if (!ore.isEmpty() && !macerate.ore) {
        event.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: Ingredient.of(`#forge:ores/${material}`).toJson() }],
          "outputItems": [dust.withCount(2).toJson()]
        }).id(`kubejs:ftbic/macerating/ores/${material}_to_dust`)
        dustCount.ftbic++
      }
      if (!raw_material.isEmpty() && !macerate.raw) {
        event.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: Ingredient.of(`#forge:raw_materials/${material}`).toJson() }],
          "outputItems": [
            dust.toJson(),
            { chance: 0.35, item: dust.id }
          ]
        }).id(`kubejs:ftbic/macerating/raw_materials/${material}_to_dust`)
        dustCount.ftbic++
      }
    }
  })
  if (global.devLogging) {
    console.log(`Added Dust Recipes - FTBIC: ${dustCount.ftbic}, Occultism: ${dustCount.occult}`)
    // Added Dust Recipes - FTBIC: 52, Occultism: 63
  }
})
