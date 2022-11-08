// list of items to not add to the Market
let MarketBlackList = [
  "twilightforest:time_sapling",
  "twilightforest:mining_sapling",
  "twilightforest:sorting_sapling",
  "twilightforest:transformation_sapling",
  "occultism:otherworld_sapling",
  "occultism:otherworld_sapling_natural",
  "ars_nouveau:magebloom_crop"
]

// List Gen
/*
    /markethelper
    OP permission required
    only should need to be run on mod changes,
    generates a new marketitems.json file
*/
ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments, builtinSuggestions: Suggestions } = event;
  event.register(
    Commands.literal("markethelper")
      .requires(source => source.getServer().isSingleplayer() || source.hasPermission(2))
      .executes((ctx) => Market(ctx.source))
  )
})

function Market(source) {
  let saplings = {}
  let seeds = {}
  let flowers = {}
  let taggedSeeds = Ingredient.of('#forge:seeds').stacks
  taggedSeeds.forEach(seed => {
    let mod = seed.idLocation.namespace
    if (seeds[mod] == null) {
      seeds[mod] = []
    }
    seeds[mod].push(seed.id)
  })
  let taggedSaplings = Ingredient.of('#minecraft:saplings').stacks
  taggedSaplings.forEach(sapling => {
    let mod = sapling.idLocation.namespace
    if (saplings[mod] == null) {
      saplings[mod] = []
    }
    saplings[mod].push(sapling.id)
  })
  let taggedFlowers = Ingredient.of('#minecraft:flowers').stacks
  taggedFlowers.forEach(flower => {
    let mod = flower.idLocation.namespace
    if (flowers[mod] == null) {
      flowers[mod] = []
    }
    flowers[mod].push(flower.id)
  })
  JsonIO.write('kubejs/server_scripts/mods/farmingforblockheads/marketitems.json', { saplings: saplings, seeds: seeds, flowers: flowers })
  return 1
}

// Datapack Gen
ServerEvents.highPriorityData(event => {
  let market = JsonIO.read('kubejs/server_scripts/mods/farmingforblockheads/marketitems.json')
  market.forEach((key, type) => {
    type.forEach((mod, list) => {
      let recipe = {
        modId: mod,
        silent: true,
        group: {
          name: `${mod == 'minecraft' ? 'Vanilla' : Platform.getInfo(mod).name} ${key[0].toUpperCase()}${key.slice(1)}`,
          enabledByDefault: true,
          defaultPayment: { item: "minecraft:emerald" },
          defaultCategory: `farmingforblockheads:${key}`
        },
        customEntries: []
      }
      list.forEach(item => {
        if (!MarketBlackList.includes(item)) {
          recipe.customEntries.push({ output: item })
        }
      })
      if (recipe.customEntries.length == 0) {
        recipe.group.enabledByDefault = false
      }
      event.addJson(`kubejs:farmingforblockheads_compat/${mod == 'minecraft' ? 'vanilla' : mod}_${key}.json`, recipe)
    })
  })
})
