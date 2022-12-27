ServerEvents.recipes(event => {
  // Fix Sturdy Stone conflict
  event.shaped('quark:sturdy_stone', [' A ', 'ABA', ' A '], {
    A: '#forge:nuggets/iron',
    B: 'allthecompressed:cobblestone_block_1x'
  }).id('quark:building/crafting/sturdy_stone')
})