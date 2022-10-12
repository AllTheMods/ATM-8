ServerEvents.recipes(event => {
  event.remove({id: 'rsinfinitybooster:infinity_card'})
  event.shaped('rsinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
   U: '#forge:ingots/unobtainium',
   B: 'refinedstorage:range_upgrade',
   E: 'alltheores:enderium_plate',
   N: 'minecraft:netherite_ingot'
  })
})