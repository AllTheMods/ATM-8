JEIEvents.hideItems(event => {
    event.hide(/extrastorage:(block|disk|storagepart)_.+/)
    event.hide(/rebornstorage:(small|medium|large|larger)_(item|fluid)_disk.*/)
    event.hide(/extrastorage:advanced_(importer|exporter)/)
    event.hide('twilightforest:uncrafting_table')
    Color.DYE.forEach(color => {
        ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'].forEach(machine => {
            event.hide(`refinedstorage:${color}_${machine}`)
        })
    })
})