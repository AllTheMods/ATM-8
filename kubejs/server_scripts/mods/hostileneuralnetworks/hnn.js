ServerEvents.recipes(e=> {
    e.remove({id: 'hostilenetworks:living_matter/extraterrestrial/nether_star'})
    e.remove({id: 'hostilenetworks:living_matter/hellish/blaze_rod'})
    e.shaped('4x reliquary:zombie_heart', ['AAA','APA','AAA'],{
        A: 'hostilenetworks:nether_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:zombie"}}').strongNBT()
    })
    e.shaped('2x reliquary:squid_beak', ['A A',' P ','A A'],{
        A: 'hostilenetworks:overworld_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:squid"}}').strongNBT()
    })
    e.shaped('4x reliquary:rib_bone', ['A A',' P ','A A'],{
        A: 'hostilenetworks:overworld_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:skeleton"}}').strongNBT()
    })
    e.shaped('2x reliquary:catalyzing_gland', ['A A',' P ','A A'],{
        A: 'hostilenetworks:overworld_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:creeper"}}').strongNBT()
    })
    e.shaped('4x reliquary:chelicerae', ['A A',' P ','A A'],{
        A: 'hostilenetworks:overworld_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:spider"}}').strongNBT()
    })
    e.shaped('2x reliquary:slime_pearl', ['A A',' P ','A A'],{
        A: 'hostilenetworks:overworld_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:slime"}}').strongNBT()
    })
    e.shaped('4x reliquary:bat_wing', ['A A',' P ','A A'],{
        A: 'hostilenetworks:overworld_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:witch"}}').strongNBT()
    })
    e.shaped('6x reliquary:withered_rib', ['A A','APA','A A'],{
        A: 'hostilenetworks:nether_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:wither_skeleton"}}').strongNBT()
    })
    e.shaped('2x reliquary:molten_core', ['A A','APA','A A'],{
        A: 'hostilenetworks:nether_prediction',
        P: [Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:blaze"}}').strongNBT(), Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:magma_cube"}}').strongNBT()]
    })
    e.shaped('reliquary:nebulous_heart', ['AAA','APA','AAA'],{
        A: 'hostilenetworks:end_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:enderman"}}').strongNBT()
    })
    e.shaped('minecraft:dragon_head', ['AAA','BPB','AAA'],{
        A: 'hostilenetworks:end_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}').strongNBT(),
        B: 'minecraft:dragon_breath'
    })

})