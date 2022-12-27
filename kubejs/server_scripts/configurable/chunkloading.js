ServerEvents.recipes(event => {
    if (global.chunk) {
        event.remove({id:'mekanism:dimensional_stabilizer'})
        event.remove({id:'ae2:network/blocks/spatial_anchor'})
    }
})
