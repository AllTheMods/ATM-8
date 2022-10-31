ServerEvents.recipes(e=> {
    e.remove({id: 'industrialforegoing:ore_laser_base'})
    e.shaped('industrialforegoing:ore_laser_base', ['PTP','OFO','GRG'],{
        P: 'industrialforegoing:plastic',
        T: 'allthemodium:allthemodium_pickaxe',
        O: '#forge:ores/iron',
        F: 'industrialforegoing:machine_frame_advanced',
        G: '#forge:gears/vibranium',
        R: 'minecraft:redstone'
    }).id('kubejs:industrialforegoings/ore_laser_drill')
})
