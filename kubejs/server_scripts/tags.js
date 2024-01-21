ServerEvents.tags('item', event => {
  event.add('minecraft:boats', /byg:\w+?_boat/)
  event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
  event.add('forge:cheese', '#forge:cheeses')
  event.add('forge:plastic', 'pneumaticcraft:plastic')
  event.add('forge:dusts/ender', 'ae2:ender_dust')
  event.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])
  event.add('forge:raw_materials', ['silentgear:raw_azure_silver', 'silentgear:raw_crimson_iron'])
  event.add('forge:rubber', ['ftbic:rubber','industrialforegoing:dryrubber','thermal:cured_rubber'])
  event.add('mysticalagriculture:essences', [
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:azure_silver_essence',
    'mysticalagriculture:crimson_iron_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
  ])
  event.add('mysticalagriculture:seeds', [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:azure_silver_seeds',
    'mysticalagriculture:crimson_iron_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
  ])
  event.add('forge:dusts', 'alltheores:netherite_dust')
  event.add('forge:dusts/netherite', 'alltheores:netherite_dust')

  event.remove('forge:shears', 'allthemodium:alloy_paxel')
  
  //Fix Mythicbotany tags
  event.add('forge:raw_materials/elementium', 'mythicbotany:raw_elementium')
  event.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block')

  //Fix BYG recipe tags
  event.add('c:sand/black', '#forge:black_sand')
  event.add('c:sand/white', '#forge:white_sand')
  event.add('c:sand/blue', '#forge:blue_sand')
  event.add('c:sand/purple', '#forge:purple_sand')
  event.add('c:sand/pink', '#forge:pink_sand')

  //xycraft RGB glass
  Color.DYE.keySet().forEach(color => {
    event.remove(`forge:glass/${color}`, '@xycraft_world')
    event.remove(`forge:glass/brown`, '@xycraft_world')
  })

  //allow Minecolonies smelter to smelt all ores
  event.add('minecolonies:raw_ore', '#forge:raw_materials')
  var ores = ArrayList(IngredientHelper.tag('forge:ores').itemIds)
  var exceptions = ['minecraft:ancient_debris', 'twilightforest:raw_ironwood', 'twilightforest:armor_shard_cluster', 'deepresonance:resonating_ore_deepslate', 'deepresonance:resonating_ore_end', 'deepresonance:resonating_ore_nether', 'deepresonance:resonating_ore_stone']
  ores.removeAll(exceptions)
  event.add("minecolonies:breakable_ore", ores)
  event.add("minecolonies:raw_ore", exceptions)
})

ServerEvents.tags('block', event => {
  event.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
  event.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported')
  event.add('forge:relocation_not_supported', [/productivebees:.+/, 'minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/, '@waystones'])
  event.add('ars_nouveau:golem/budding', [
    'minecraft:budding_amethyst',
    'ae2:damaged_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:flawless_budding_quartz'
  ])
  event.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster'])
  event.add('mysticalagriculture:crops', [
    'mysticalagriculture:allthemodium_crop',
    'mysticalagriculture:azure_silver_crop',
    'mysticalagriculture:crimson_iron_crop',
    'mysticalagriculture:unobtainium_crop',
    'mysticalagriculture:vibranium_crop'
  ])
  
  event.add('minecraft:beacon_base_blocks', [
    'allthemodium:vibranium_allthemodium_alloy_block',
    'allthemodium:unobtainium_allthemodium_alloy_block',
    'allthemodium:unobtainium_vibranium_alloy_block',
    'allthetweaks:atm_star_block'
  ])

  event.add('hexerei:crow_harvestable',['#mysticalagriculture:crops'])
})

ServerEvents.tags('fluid', event => {
  event.remove('minecraft:water',[
    'ad_astra:oil','ad_astra:flowing_oil',
    'ad_astra:cryo_fuel','ad_astra:flowing_cryo_fuel',
    'ad_astra:fuel','ad_astra:flowing_fuel',
    'hexerei:blood_flowing','hexerei:blood_fluid',
    'hexerei:tallow_flowing','hexerei:tallow_fluid',
    'createaddition:flowing_seed_oil','createaddition:seed_oil',
    'createaddition:bioethanol','createaddition:flowing_bioethanol'])
})

ServerEvents.tags('entity_type', event => {
  event.add('kubejs:mob_blacklist', [/productivebees:.+/, 'allthemodium:piglich', 'artifacts:mimic', 'minecraft:iron_golem'])
  event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
  event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
  event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
  event.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
  event.add('ars_nouveau:drygmy_blacklist', [/productivebees:.+/, 'artifacts:mimic'])
  event.add('spirit:soul_cage_blacklisted', '#kubejs:mob_blacklist')
})

ServerEvents.tags('worldgen/biome', event => {
  event.add('botania:mystical_flower_spawnlist', 'allthemodium:mining')
  event.add('botania:mystical_mushroom_spawnlist', [
    'allthemodium:the_other', 'allthemodium:soul_sand_valley', 'allthemodium:warped_forest',
    'allthemodium:desert_hills', 'allthemodium:desert', 'allthemodium:crimson_forest', 'allthemodium:basalt_deltas'])
  event.add('elementalcraft:has_sources/all', 'allthemodium:mining')
  event.add('elementalcraft:has_sources/sky', 'allthemodium:mining')
  event.add('elementalcraft:has_sources/plain', 'allthemodium:mining')
})

//temp fix for bambooeverything breaking boat tags until above 2.2.4
ServerEvents.highPriorityData(event => {
  event.addJson(`minecraft:tags/items/boats.json`, {
    "replace": true,
    "values": [
      "minecraft:oak_boat",
      "minecraft:spruce_boat",
      "minecraft:birch_boat",
      "minecraft:jungle_boat",
      "minecraft:acacia_boat",
      "minecraft:dark_oak_boat",
      "minecraft:mangrove_boat",
      "#minecraft:chest_boats",
      "bambooeverything:bamboo_raft",
      "deeperdarker:echo_boat"
    ]
  })
})
