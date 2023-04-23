ServerEvents.recipes(event => {
    //removal of recipes due to dupe bug
    //https://github.com/JoeFoxe/Hexerei-1.19/issues/36
    event.remove({ id: 'hexerei:mahogany_drying_rack'})
    event.remove({ id: 'hexerei:witch_hazel_drying_rack'})
    event.remove({ id: 'hexerei:willow_drying_rack'})

    event.remove({ id:'securitycraft:projector'})
})
