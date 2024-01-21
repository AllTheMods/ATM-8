ServerEvents.recipes(event => {
  event.remove({ id: 'aeinfinitybooster:infinity_card' })
  event.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
    U: '#forge:ingots/unobtainium',
    B: 'ae2:wireless_booster',
    E: '#forge:plates/enderium',
    N: 'minecraft:netherite_ingot'
  }).id('kubejs:aeinfinitybooster/infinity_card')

  event.shapeless(` 4x ae2:fluix_covered_cable`,[`ae2:fluix_covered_dense_cable`]).id(`kubejs:ae2/dense_to_normal`)
  event.shapeless(` 4x ae2:fluix_smart_cable`,[`ae2:fluix_smart_dense_cable`]).id(`kubejs:ae2/smart_dense_to_smart_normal`)

})
