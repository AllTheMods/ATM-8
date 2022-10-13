ServerEvents.recipes(event => {
  // Dragon Soul
  // MISSING INGREDIENTS
  event.shaped('allthetweaks:dragon_soul', ['CDA', 'SNI', 'BSE'], {
    A: 'occultism:soul_gem',
    C: 'minecraft:bedrock',
    D: 'minecraft:bedrock',
    N: 'allthemodium:piglich_heart',
    B: 'minecraft:dragon_breath',
    S: 'minecraft:bedrock',
    E: 'minecraft:bedrock',
    I: Item.of('blue_skies:nature_arc', { ArcLevel: 2 })
  }).id('kubejs:allthetweaks/dragon_soul')

  // Dimensional Seed
  /* NO ATC
  event.custom({
      type: 'mysticalagriculture:infusion',
      input: { item: 'allthecompressed:emerald_block_6x' },
      ingredients: [
          { item: 'allthecompressed:blackstone_block_7x' },
          { item: 'allthecompressed:end_stone_block_5x' },
          { item: 'allthecompressed:netherrack_block_7x' },
          { item: 'allthecompressed:clay_block_5x' },
          { item: 'allthecompressed:soul_sand_block_4x' },
          { item: 'allthecompressed:red_sand_block_4x' },
          { item: 'allthecompressed:red_sand_block_4x' },
          { item: 'allthecompressed:obsidian_block_6x' }
      ],
      result: { item: 'allthetweaks:dimensional_seed' }
  })*/

  // Withers Compass
  // MISSING INGREDIENTS
  event.shaped('allthetweaks:withers_compass', ['DCD', 'ABA', 'DED'], {
    A: 'mekanism:module_gravitational_modulating_unit',
    B: 'ars_nouveau:glyph_wither',
    C: 'minecraft:bedrock',
    D: 'minecraft:bedrock',
    E: 'mekanism:module_gravitational_modulating_unit'
  }).id('kubejs:allthetweaks/withers_compass')

  // Philosopher's Fuel
  // MISSING INGREDIENTS
  event.shaped('allthetweaks:philosophers_fuel', ['ABC', 'DEF', 'GHI'], {
    A: 'mysticalagradditions:insanium_coal_block',
    B: Item.of('ftbic:quad_uranium_fuel_rod', { Damage: 0 }),
    C: 'mekanism:pellet_antimatter',
    D: 'evilcraft:piercing_vengeance_focus',
    E: 'mysticalagriculture:supremium_furnace',
    F: Item.of('elementalcraft:jewel', '{elementalcraft:{jewel:"elementalcraft:phoenix"}}'),
    G: 'minecraft:bedrock',
    H: 'twilightforest:carminite_block',
    I: 'ftbic:nuclear_reactor'
  }).id('kubejs:allthetweaks/philosophers_fuel')

  // Improbable Probaility Device
  // MISSING INGREDIENT
  event.shaped('allthetweaks:improbable_probability_device', ['AAB', 'CGE', 'FDF'], {
    A: 'computercraft:monitor_advanced',
    B: 'mekanismgenerators:module_solar_recharging_unit',
    C: ['extradisks:1048576k_storage_part', 'extradisks:1048576k_fluid_storage_part', 'megacells:cell_component_256m'],
    D: 'minecraft:bedrock',
    E: 'minecraft:bedrock',
    F: 'minecraft:bedrock',
    G: 'ftbic:nuke'
  }).id('kubejs:allthetweaks/improbable_probability_device')

  // Nexium Emitter
  event.shaped('allthetweaks:nexium_emitter', ['A B', ' CF', 'GED'], {
    A: 'powah:player_transmitter_nitro',
    B: ['ae2:wireless_terminal', 'ae2:wireless_crafting_terminal', 'refinedstorageaddons:wireless_crafting_grid', 'refinedstorage:wireless_grid', 'refinedstorage:wireless_fluid_grid'],
    C: 'mekanism:supercharged_coil',
    D: 'ftbic:ev_solar_panel',
    E: 'ae2:singularity',
    F: 'mekanismgenerators:module_solar_recharging_unit',
    G: 'ftbic:overclocked_heat_vent'
  }).id('kubejs:allthetweaks/nexium_emitter')

  // Pulsating Black Hole
  // MISSING INGREDIENT
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mekanism:pellet_antimatter', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:bedrock', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ftbic:nuke', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:bedrock', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:bedrock', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:bedrock', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:bedrock', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ae2:quantum_ring', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ftbic:antimatter', 'count': 1 }
    ],
    pressure: 4.9,
    results: [
      {
        'item': 'allthetweaks:pulsating_black_hole'
      }
    ]
  }).id('kubejs:pressure/allthetweaks/pulsating_black_hole')

  // Oblivion Shard
  // MISSING INGREDIENT
  event.shaped('allthetweaks:oblivion_shard', [' AB', 'ACA', 'BA '], {
    A: 'allthemodium:unobtainium_block',
    C: 'naturesaura:end_flower',
    B: 'minecraft:bedrock'
  }).id('kubejs:allthetweaks/oblivion_shard')

  // Creative Essence
  event.shaped('mysticalagradditions:creative_essence', ['CAC', 'ABA', 'CAC'], {
    A: 'mysticalagradditions:insanium_block',
    C: 'mysticalagradditions:insanium_gemstone_block',
    B: 'mysticalagriculture:master_infusion_crystal'
  }).id('kubejs:allthetweaks/creative_essence')
})
