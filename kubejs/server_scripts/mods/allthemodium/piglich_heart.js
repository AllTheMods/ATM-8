ServerEvents.recipes(event => {
    event.shaped('kubejs:piglich_heart_block', ['HHH','HHH','HHH'],{
        H: 'allthemodium:piglich_heart'
    }).id('kubejs:shaped_heart_block')
    event.shapeless('9x allthemodium:piglich_heart', 'kubejs:piglich_heart_block').id('kubejs:shapeless_piglich_heart')
})