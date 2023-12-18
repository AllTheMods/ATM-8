/*
    Authored by Mitchell52
    for AllTheMods 8
*/

ServerEvents.recipes(event =>{
// Other code moved to ore_processing
  
//Fix thermal Integ having the recipe set for the pulverizer instead of the induction smelter
event.remove({ id: `thermal:compat/mekanism/smelter_mek_osmium_ore`})
event.custom({
    type: "thermal:smelter",
    ingredient: {"tag": "forge:ores/osmium"},
    result: [
      {item: "alltheores:osmium_ingot","chance": 1.0},
      {item: "minecraft:copper_ingot","chance": 0.2},
      {item: "thermal:rich_slag","chance": 0.2}
    ],
    experience: 0.2
  }).id(`thermal:compat/mekanism/smelter_mek_osmium_ore`)

})
