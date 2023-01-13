// priority: 1000

global['auTags'] = []

global['loaded'] = {
    IE_Loaded: Platform.isLoaded('immersiveengineering'),
    Mek_Loaded: Platform.isLoaded('mekanism'),
    Create_Loaded: Platform.isLoaded('create'),
    CreateAdd_Loaded: Platform.isLoaded('createaddition'),
    Thermal_Loaded: false,
    FTBIC_Loaded: Platform.isLoaded('ftbic'),
    Tinkers_Loaded: Platform.isLoaded('tconstruct'),
    Occult_Loaded: Platform.isLoaded('occultism'),
    ATO_Loaded: Platform.isLoaded('alltheores')
}

global['alloys'] = [
    'steel',
    'invar',
    'electrum',
    'bronze',
    'enderium',
    'lumium',
    'signalum',
    'constantan',
    'brass'
]

global['blueskies'] = [
    'aquite',
    'charoite',
    'falsite',
    'horizonite',
    'ventium'
]

global['ingredientCheck'] = function(itemstack, json) {
    if(json.has('tag')) {
        let tag = json.get('tag').getAsString()
        if (AlmostUnified.getItemIds(tag).contains(itemstack.id)) { return true }
    } else if (json.has('item')) {
        let item = json.get('item').getAsString()
        if (itemstack.id == item) { return true }
    }
    return false
}

ServerEvents.recipes(event => {
    global.auTags = AlmostUnified.getTags()
})
