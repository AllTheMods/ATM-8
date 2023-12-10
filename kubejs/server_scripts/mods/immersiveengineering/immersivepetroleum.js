ServerEvents.recipes(event =>{
    //todo, change to tag instead of item
    //overrite lube cracking to create Pbees wax
    event.remove({id:'immersivepetroleum:hydrotreater/lubricant_cracking'})
    event.custom({
        type: 'immersivepetroleum:hydrotreater',
        energy: 2560,
        input: {amount: 24, tag: 'forge:lubricant'},
        result: {amount: 24, fluid: 'immersivepetroleum:lubricant_cracked'},
        secondary_input: {amount: 5, tag: 'minecraft:water'},
        secondary_result: {chance: 0.024, item: 'productivebees:wax'},
        time: 5
      }).id('kube:immersivepetroleum/hydrotreater/lubricant_cracking')
    
    //overrite oil distillation to create thermal bitumen
    event.remove({id:'immersivepetroleum:distillationtower/oil'})
    event.custom({
        type: 'immersivepetroleum:distillation',
        byproducts: [{chance: 0.07,item: 'thermal:bitumen'}],
        energy: 1024,
        input: {amount: 50, tag: 'forge:crude_oil'},
        results: [
            {amount: 17, fluid: 'immersivepetroleum:naphtha'},
            { amount: 18, fluid: 'immersivepetroleum:kerosene'},
            { amount: 30, fluid: 'immersivepetroleum:diesel_sulfur'},
            { amount: 12, fluid: 'immersivepetroleum:lubricant'}
        ],
        time: 1
      }).id('kube:immersivepetroleum/distillationtower/oil')
})