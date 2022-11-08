WorldgenEvents.remove(event => {
  event.removeOres(ore => {
    ore.blocks = [
      'ftbic:tin_ore',
      'ftbic:deepslate_tin_ore',
      'ftbic:lead_ore',
      'ftbic:deepslate_lead_ore',
      'ftbic:uranium_ore',
      'ftbic:deepslate_uranium_ore',
      'ftbic:aluminum_ore',
      'ftbic:deepslate_aluminum_ore',
      'ftbic:iridium_ore',
      'ftbic:deepslate_iridium_ore',
      'occultism:silver_ore',
      'occultism:silver_ore_deepslate',
      'xycraft_world:aluminum_ore_stone',
      'xycraft_world:aluminum_ore_deepslate'
    ]
  })
})

WorldgenEvents.add(event => {
  event.addOre((ore) => {
    ore.id = "kubejs:mining_poor_uraninite"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'powah:uraninite_ore_poor')
    ore.addTarget('minecraft:deepslate', 'powah:deepslate_uraninite_ore_poor')
    ore.size(5)
    ore.count(8)
    ore.squared()
    ore.uniformHeight(64, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_uraninite"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'powah:uraninite_ore')
    ore.addTarget('minecraft:deepslate', 'powah:deepslate_uraninite_ore')
    ore.size(4)
    ore.count(6)
    ore.squared()
    ore.uniformHeight(64, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_dense_uraninite"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'powah:uraninite_ore_dense')
    ore.addTarget('minecraft:deepslate', 'powah:deepslate_uraninite_ore_dense')
    ore.size(3)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(64, 254)
  })
})