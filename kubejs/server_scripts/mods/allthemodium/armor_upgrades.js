ServerEvents.recipes(event => {
  let patterns = { helmet: ['XXX', 'XYX'], chestplate: ['XYX', 'XXX', 'XXX'], leggings: ['XXX', 'XYX', 'X X'], boots: ['XYX', 'X X'] }
  let tiers = [
    { material: '#forge:ingots/iron', previous: 'minecraft:leather', makes: 'minecraft:iron' },
    { material: '#forge:gems/diamond', previous: 'minecraft:iron', makes: 'minecraft:diamond' },
    { material: '#forge:ingots/allthemodium', previous: 'minecraft:netherite', makes: 'allthemodium:allthemodium' },
  ]
  for (const tier of tiers) {
    for (const [armorItem, armorPattern] of Object.entries(patterns)) {
      event.custom({
        type: 'allthemodium:atmshaped_crafting',
        pattern: armorPattern,
        key: {
          X: Ingredient.of(tier.material).toJson(),
          Y: Item.of(`${tier.previous}_${armorItem}`).toJson()
        },
        result: Item.of(`${tier.makes}_${armorItem}`).toJson()
      }).id(`kubejs:keep_enchants/${tier.previous.replace(':', '/')}_${armorItem}_upgrade`)
    }
  }
})
