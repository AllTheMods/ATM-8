ServerEvents.tags('item', event => {
  event.add('blue_skies:planks', /blue_skies:.+?_planks/)
  event.add('byg:planks', /byg:.+?_planks/)
  let chestsMissingTags = ['hexerei:willow_chest', 'hexerei:mahogany_chest', 'ars_nouveau:archwood_chest', 'ad_astra:strophar_chest', 'ad_astra:aeronos_chest']
  event.add('forge:chests', chestsMissingTags)
  event.add('forge:chests/wooden', chestsMissingTags)
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
  event.forEachRecipe({ id: /minecraft:wooden_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })
  event.forEachRecipe({ id: 'minecraft:stick' }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('#', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })

  let cobble = Ingredient.of('#quark:stone_tool_materials').subtract(Ingredient.of('#blue_skies:cobblestone'))
  event.forEachRecipe({ id: /quark:tweaks\/crafting\/utility\/tools\/stone_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', cobble.toJson())
    json.add('key', key)
    recipe.json = json
  })

  // So many crafting tables
  let tablePlanks = planks.subtract(Ingredient.of('#byg:planks'))
  event.forEachRecipe({ id: 'minecraft:crafting_table' }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('#', tablePlanks.toJson())
    json.add('key', key)
    recipe.json = json
  })

  // Basic Chest readdition for planks without chests
  let hasChest = Ingredient.of([
    '#blue_skies:planks',
    '#hexerei:willow_planks',
    '#hexerei:mahogany_planks',
    'ad_astra:strophar_planks',
    'ad_astra:aeronos_planks',
    'ars_nouveau:archwood_planks',
    'quark:blossom_planks',
    'quark:azalea_planks',
    'minecraft:oak_planks',
    'minecraft:spruce_planks',
    'minecraft:birch_planks',
    'minecraft:jungle_planks',
    'minecraft:acacia_planks',
    'minecraft:dark_oak_planks',
    'minecraft:crimson_planks',
    'minecraft:warped_planks',
    'minecraft:mangrove_planks',
    'twilightforest:twilight_oak_planks',
    'twilightforest:canopy_planks',
    'twilightforest:mangrove_planks',
    'twilightforest:dark_planks',
    'twilightforest:time_planks',
    'twilightforest:transformation_planks',
    'twilightforest:mining_planks',
    'twilightforest:sorting_planks',
  ])
  let chestPlanks = Ingredient.of('#minecraft:planks').subtract(hasChest)
  event.shaped('minecraft:chest', ['PPP', 'P P', 'PPP'], { P: chestPlanks }).id('kubejs:chest')
  // add chest to plain chest recipes
  event.remove({ id: 'quark:building/crafting/chests/chest_revert' })
  event.remove({ id: 'ars_nouveau:archwood_to_chest' })
  let convertableChests = Ingredient.of('#forge:chests/wooden').subtract(Ingredient.of('#forge:chests/trapped')).subtract('minecraft:chest')
  event.shapeless('minecraft:chest', convertableChests).id('kubejs:chest/plain')

  // Rechiseled Chisel / Croptopia Knife
  event.remove({ id: 'rechiseled:chisel' })
  event.shaped('rechiseled:chisel', ['C ', ' S'], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:rechiseled/chisel`)
  event.remove({ id: 'croptopia:knife' })
  event.shaped('croptopia:knife', [' C', 'S '], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:croptopia/knife`)

  // Mangrove ABD plank wall (match other plank wall recipes)
  event.remove({ id: 'absentbydesign:wall_mangrove_planks' })
  event.shaped('absentbydesign:wall_mangrove_planks', ['   ', '###', '# #'], { '#': 'minecraft:mangrove_planks' })

  // Remove minecraft recipes, mods add better versions
  event.remove({ id: 'minecraft:cake' })
  event.remove({ id: 'minecraft:daylight_detector' })
  event.remove({ id: 'minecraft:comparator' })
  event.remove({ id: 'minecraft:beehive' })

  // Tiny Coal
  event.remove({ id: 'additional_lights:fire_for_standing_torch_s' })
  event.shaped('additional_lights:fire_for_standing_torch_s', ['S', 'C'], { S: '#forge:rods/wooden', C: '#minecraft:coals' })

  // Spirit soul sand 1x
  event.remove({ id: 'spirit:crafting/compressed_soul_sand' })
  event.remove({ id: 'spirit:crafting/decompressed_soul_sand' })
  event.custom({
    "type": "spirit:soul_engulfing",
    "input": {
      "ingredient": { "item": "minecraft:iron_block" },
      "multiblock": {
        "pattern": [
          [
            "   ",
            " @ ",
            "   "
          ],
          [
            " S ",
            "SXS",
            " S "
          ]
        ],
        "keys": {
          "S": {
            "block": "spirit:compressed_soul_powder_block"
          },
          "X": {
            "block": "allthecompressed:soul_sand_block_1x"
          }
        }
      }
    },
    "duration": 60,
    "outputItem": "spirit:soul_steel_block"
  }).id('spirit:soul_engulfing/soul_steel_block')

  // quark's log to stick recipe, but botania safe
  let logSticks = Ingredient.of('#minecraft:logs').subtract(Ingredient.of(['#botania:livingwood_logs', '#botania:dreamwood_logs']))
  event.shaped('16x minecraft:stick', ['s', 's'], { s: logSticks }).id('kubejs:easy_sticks')
})
