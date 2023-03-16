ServerEvents.recipes(event => {
    event.forEachRecipe({type:"farmersdelight:cutting"}, recipe => {
        let recipeJson = recipe.json
        let ingredients = recipeJson.getAsJsonArray('ingredients')
        // deployer recipe can only have 2 inputs, the item and the held item
        // (this shouldn't ever be true as the cutting board can only take a single item as well)
        if (ingredients.size() > 1) {return;}
        let item = Ingredient.of(ingredients.get(0))
        let tool = Ingredient.of(recipeJson.get('tool'))
        let results = recipeJson.get('result')
        // deployer can only have 4 different outputs
        if (results.size() > 4) {return;}
        event.custom({
            type: 'create:deploying',
            ingredients: [item.toJson(), tool.toJson()],
            results: results
        }).id(`kubejs:createcompat/${recipe.getId().replace(':','/')}`)
    })
})
