// Force Star Items to require NBT
JEIEvents.subtypes(event => {
    event.useNBT("allthemodium:unobtainium_vibranium_alloy_block")
	event.useNBT("mekanism:teleportation_core")
})

// Add Star Items to JEI
JEIEvents.addItems(event => {
	// Draconic Infused Teleportation Core
	event.add(Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Draconic Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson())
	// Ender Infused Teleportation Core
	event.add(Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Ender Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson())
	// Nether Infused Teleportation Core
	event.add(Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Nether Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson())
	//Unobtainium-Vibranium Awakened Block
	event.add(Item.of('allthemodium:unobtainium_vibranium_alloy_block', "{HideFlags:1,display:{Name:'[{\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson())
})

// Add Info to Items

JEIEvents.information(event => {
  event.addItem('allthetweaks:dimensional_seed', Text.of('The structure for the seed must be built with the Nether Portal facing North.'))
})
	