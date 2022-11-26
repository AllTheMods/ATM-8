WorldgenEvents.remove(event => {
  event.removeFeatureById('underground_ores', [
    "ftbic:ore_iridium_large",
    "ftbic:ore_iridium_buried",
    "ftbic:ore_tin_upper",
    "ftbic:ore_tin_small",
    "ftbic:ore_lead_small",
    "ftbic:ore_uranium_extra",
    "ftbic:ore_aluminum_upper",
    "ftbic:ore_iridium",
    "ftbic:ore_aluminum_small",
    "ftbic:ore_lead_middle",
    "ftbic:ore_uranium",
    "ftbic:ore_aluminum_middle",
    "ftbic:ore_lead_upper",
    "ftbic:ore_uranium_lower",
    "ftbic:ore_tin_middle",
    "thermal:lead_ore",
    "thermal:nickel_ore",
    "thermal:silver_ore",
    "thermal:tin_ore",
    "xycraft_world:ore_aluminum"
  ])
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
