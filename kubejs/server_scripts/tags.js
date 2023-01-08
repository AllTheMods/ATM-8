ServerEvents.tags('item', event => {
  event.add('minecraft:boats', /byg:\w+?_boat/)
  event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
  event.add('forge:cheese', '#forge:cheeses')
  event.add('forge:plastic', 'pneumaticcraft:plastic')
  event.add('forge:dusts/ender', 'ae2:ender_dust')
  event.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])

  //temp byg fix until above 2.0.0.13
  event.add('c:black_sand', '#forge:black_sand')
  event.add('c:white_sand', '#forge:white_sand')
  event.add('c:blue_sand', '#forge:blue_sand')
  event.add('c:purple_sand', '#forge:purple_sand')
  event.add('c:pink_sand', '#forge:pink_sand')
})

ServerEvents.tags('block', event => {
  event.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
  event.add('ae2:blacklisted/spatial','#forge:relocation_not_supported')
  event.add('forge:relocation_not_supported', [/productivebees:.+/, 'minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/, '@waystones'])
  event.add('ars_nouveau:golem/budding', [
    'minecraft:budding_amethyst',
    'ae2:damaged_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:flawless_budding_quartz'
  ]);
  event.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster']);
})

ServerEvents.tags('entity_type', event => {
  event.add('kubejs:mob_blacklist', [/productivebees:.+/, 'allthemodium:piglich', 'artifacts:mimic'])
  event.add('mob_grinding_utils:noswab', '#kubejs:mob_blacklist')
  event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
  event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
  event.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
})

ServerEvents.tags('fluid', event =>{
  event.add('forge:crude_oil', 'ad_astra:oil')
  event.remove('minecraft:water', 'ad_astra:oil')
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
