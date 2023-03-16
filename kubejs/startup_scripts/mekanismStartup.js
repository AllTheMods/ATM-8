/*
  Mekanism items for processing stack
  Authored by EnigmaQuip

  if using existing dust, dust must be defined until kjs tag loading fixed
  material at a minimum should have an ore associated with it at #forge:ores/material
*/

global.mekStackAdditions = [
  {material:'crimson_iron', color:'#fc9aad', makeDust: false, dust:'silentgear:crimson_iron_dust'},
  {material:'azure_silver', color:'#e89ffc', makeDust: false, dust:'silentgear:azure_silver_dust'}
]

// DO NOT EDIT BELOW THIS LINE

const $MekanismAPI = Java.loadClass('mekanism.api.MekanismAPI')
const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')

StartupEvents.registry('item', event => {
  const mekItems = ['clump', 'crystal', 'dirty_dust', 'shard']
  function mekStack(name, color) {
    mekItems.forEach(type => {
      event.create(`${type}_${name}`)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', `mekanism:item/${type}`)
        .texture('layer2', `mekanism:item/${type}_overlay`)
        .color(1, color)
        .tag(`mekanism:${type}s`)
        .tag(`mekanism:${type}s/${name}`)
    })
    const SlurryRegistry = $MekanismAPI.slurryRegistry()
    SlurryRegistry['register(java.lang.String,java.lang.Object)'](`clean_${name}`, $Slurry($SlurryBuilder.clean().ore(`forge:ores/${name}`).color(Color.of(color).getRgbJS())))
    SlurryRegistry['register(java.lang.String,java.lang.Object)'](`dirty_${name}`, $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${name}`).color(Color.of(color).getRgbJS())))
  }
  global.mekStackAdditions.forEach(entry => {
    mekStack(entry.material, entry.color)
    if (entry.makeDust) {
      event.create(`dust_${entry.material}`)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', `mekanism:item/dust`)
        .color(1, entry.color)
        .tag(`forge:dusts`)
        .tag(`forge:dusts/${entry.material}`)
    }
  })
})