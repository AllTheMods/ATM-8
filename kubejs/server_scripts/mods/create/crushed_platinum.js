//missing crushed platinum handling
ServerEvents.recipes(event => {
  event.smelting('alltheores:platinum_ingot', 'create:crushed_platinum_ore').xp(0.1).id('kubejs:create/smelting/platinum_ingot_from_crushed')
  event.blasting('alltheores:platinum_ingot', 'create:crushed_platinum_ore').xp(0.1).id('kubejs:create/blasting/platinum_ingot_from_crushed')
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        'item': 'create:crushed_platinum_ore'
      }
    ],
    results: [
      {
        'count': 9,
        'item': 'alltheores:platinum_nugget'
      }
    ]
  }).id('kubejs:create/splashing/crushed_platinum_ore')
})
