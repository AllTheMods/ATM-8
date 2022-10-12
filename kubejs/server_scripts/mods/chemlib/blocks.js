const BlockRegistry = java('com.smashingmods.chemlib.registry.BlockRegistry')
const ItemRegistry = java('com.smashingmods.chemlib.registry.ItemRegistry')
const ChemicalBlockType = java('com.smashingmods.chemlib.api.ChemicalBlockType')

ServerEvents.tags('item', event => {
    let blockList = BlockRegistry.getChemicalBlocksByType(ChemicalBlockType.METAL)
    for (const ChemicalBlock of blockList) {
        let chemical = ChemicalBlock.getChemicalName()
        event.get(`forge:storage_blocks/${chemical}`).add(ChemicalBlock.getId())
    }
})