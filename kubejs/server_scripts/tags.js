ServerEvents.tags('item', event => {
    event.add('minecraft:boats', /byg:\w+?_boat/)
    event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
    event.add('forge:cheese','#forge:cheeses')
})

ServerEvents.tags('block', event => {
})

ServerEvents.tags('entity_type', event => {
    event.add('kubejs:mob_blacklist', [/productivebees:.+/, 'allthemodium:piglich', 'artifacts:mimic'])
    event.add('mob_grinding_utils:noswab', '#kubejs:mob_blacklist')
    event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
    event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
})
