// priority:950
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes

ServerEvents.recipes(event => {
    let dustTags = global.auTags.filter(function (val) {
        return /forge:dusts/.test(val)
    })
    dustTags.forEach(dustTagString => {
        let material = dustTagString.replace('forge:dusts/', '')
        let dust = AlmostUnified.getPreferredItemForTag(dustTagString)

        let ingot = AlmostUnified.getPreferredItemForTag(`forge:ingots/${material}`)
        let ore = AlmostUnified.getPreferredItemForTag(`forge:ores/${material}`)
        let raw_material = AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${material}`)
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
                    if (!ingot.isEmpty() && global.ingredientCheck(ingot,input)) {
                        crush.ingot = true
                    } else if (!ore.isEmpty() && global.ingredientCheck(ore,input)) {
                        crush.ore = true
                    } else if (!raw_material.isEmpty() && global.ingredientCheck(raw_material,input)) {
                        crush.raw = true
                    }
                }
            })
            let recipe = {
                type: "occultism:crushing",
                ingredient: {},
                result: {},
                crushing_time: 200,
                ignore_crushing_multiplier: false
            }
            if (!ingot.isEmpty() && !crush.ingot) {
                let ingotRecipe = recipe
                ingotRecipe.ingredient = Ingredient.of(`#forge:ingots/${material}`).toJson()
                ingotRecipe.result = dust.withCount(1).toJson()
                ingotRecipe.ignore_crushing_multiplier = true
                event.custom(ingotRecipe).id(`kubejs:occultism/crushing/${material}_dust_from_ingot`)
            }
            if (!ore.isEmpty() && !crush.ore) {
                let oreRecipe = recipe
                oreRecipe.ingredient = Ingredient.of(`#forge:ores/${material}`).toJson()
                oreRecipe.result = dust.withCount(2).toJson()
                oreRecipe.crushing_time = 300
                event.custom(oreRecipe).id(`kubejs:occultism/crushing/${material}_dust`)
            }
            if (!raw_material.isEmpty() && !crush.raw) {
                let rawRecipe = recipe
                rawRecipe.ingredient = Ingredient.of(`#forge:raw_materials/${material}`).toJson()
                rawRecipe.result = dust.withCount(2).toJson()
                event.custom(rawRecipe).id(`kubejs:occultism/crushing/${material}_dust_from_raw_material`)
            }
        }
    })
})