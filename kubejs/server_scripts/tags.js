ServerEvents.tags('item', event => {
  event.add('minecraft:boats', /byg:\w+?_boat/)
  event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
  event.add('forge:cheese', '#forge:cheeses')

  //temp byg fix until above 2.0.0.13
  event.add('c:black_sand', '#forge:black_sand')
  event.add('c:white_sand', '#forge:white_sand')
  event.add('c:blue_sand', '#forge:blue_sand')
  event.add('c:purple_sand', '#forge:purple_sand')
  event.add('c:pink_sand', '#forge:pink_sand')
})

ServerEvents.tags('block', event => {
})

ServerEvents.tags('entity_type', event => {
  event.add('kubejs:mob_blacklist', [/productivebees:.+/, 'allthemodium:piglich', 'artifacts:mimic'])
  event.add('mob_grinding_utils:noswab', '#kubejs:mob_blacklist')
  event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
  event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
})
