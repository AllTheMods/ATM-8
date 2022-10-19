ServerEvents.tags('item', event => {
  event.add('blue_skies:planks', /blue_skies:.+?_planks/)
  event.add('byg:planks', /byg:.+?_planks/)
})

ServerEvents.recipes(event => {
  /* Fix Overlapping Recipes
      /polymorph conflicts
  */

  // Sleeping Bags / Wool Slabs
  // sleeping bags
  event.forEachRecipe({ type: 'minecraft:crafting_shaped', id: /comforts:sleeping_bag_.+/ }, recipe => {
    let out = recipe.json.get('result')
    let input = recipe.json.get('key').get('a')
    event.shaped(Item.of(out), ['   ', '   ', 'aaa'], { a: Ingredient.of(input) }).noMirror().noShrink().id(`kubejs:${recipe.getId().replace(':', '/')}`)
    event.remove({ id: recipe.getId() })
  })
  // wool slabs
  event.forEachRecipe({ type: 'minecraft:crafting_shaped', id: /absentbydesign:slab_wool_.+/ }, recipe => {
    let out = recipe.json.get('result')
    let input = recipe.json.get('key').get('#')
    event.shaped(Item.of(out), ['   ', '###', '   '], { '#': Ingredient.of(input) }).noMirror().noShrink().id(`kubejs:${recipe.getId().replace(':', '/')}`)
    event.remove({ id: recipe.getId() })
  })

  // Structurize / Construction Wand
  event.remove({ id: 'structurize:sceptergold' })
  event.shaped('structurize:sceptergold', ['C  ', ' S ', '  S'], { C: '#minecraft:stone_crafting_materials', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:structurize/sceptergold`)
  event.remove({ id: 'constructionwand:stone_wand' })
  event.shaped('constructionwand:stone_wand', ['  C', ' S ', 'S  '], { C: '#minecraft:stone_crafting_materials', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:constructionwand/stone_wand`)
  event.remove({ id: 'structurize:sceptersteel' })
  event.shaped('structurize:sceptersteel', ['C  ', ' S ', '  S'], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:structurize/sceptersteel`)
  event.remove({ id: 'constructionwand:iron_wand' })
  event.shaped('constructionwand:iron_wand', ['  C', ' S ', 'S  '], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:constructionwand/iron_wand`)

  // Blue Skies tools
  let planks = Ingredient.of('#minecraft:planks').subtract(Ingredient.of('#blue_skies:planks'))
  event.replaceInput({ id: /minecraft:wooden_(hoe|shovel|pickaxe|sword|axe)/ }, '#minecraft:planks', planks)
  event.replaceInput({ id: 'minecraft:stick' }, '#minecraft:planks', planks)

  let cobble = Ingredient.of('#quark:stone_tool_materials').subtract(Ingredient.of('#blue_skies:cobblestone'))
  event.replaceInput({ id: /quark:tweaks\/crafting\/utility\/tools\/stone_(hoe|shovel|pickaxe|sword|axe)/ }, '#quark:stone_tool_materials', cobble)

  // So many crafting tables
  let tablePlanks = planks.subtract(Ingredient.of('#byg:planks'))
  event.replaceInput({ id: 'minecraft:crafting_table' }, '#minecraft:planks', tablePlanks)

  // Rechiseled Chisel / Croptopia Knife
  event.remove({ id: 'rechiseled:chisel' })
  event.shaped('rechiseled:chisel', ['C ', ' S'], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:rechiseled/chisel`)
  event.remove({ id: 'croptopia:knife' })
  event.shaped('croptopia:knife', [' C', 'S '], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:croptopia/knife`)
})
