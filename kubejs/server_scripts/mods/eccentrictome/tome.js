let EccentricTome = Item.of('eccentrictome:tome',
  {
    "eccentrictome:mods": {
      advancedperipherals: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "advancedperipherals:manual" } } },
      adastra:{ 0: { Count:1, id: "ad_astra:astrodux"} },
      alchemistry: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "alchemistry:alchemistry_book" } } },
      allthemodium: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "allthemodium:allthemodium" } } },
      apotheosis: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "apotheosis:apoth_chronicle" } } },
      ars_nouveau: { 0: { Count: 1, id: "ars_nouveau:worn_notebook" } },
      botania: { 0: { Count: 1, id: "botania:lexicon" } },
      byg: { 0: { Count: 1, id: "byg:biomepedia" } },
      croptopia: { 0: { Count: 1, id: "croptopia:guide" } },
      deeperdarker: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "deeperdarker:wanderers_notebook" } } },
      elementalcraft: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "elementalcraft:element_book" } } },
      engineersdecor: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "engineersdecor:engineersdecor_manual" } } },
      ftbic: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "ftbic:ftbic_guide" } } },
      ftbquests: { 0: { Count: 1, id: "ftbquests:book" } },
      hexcasting: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "hexcasting:thehexbook" } } },
      immersiveengineering: { 0: { Count: 1, id: "immersiveengineering:manual" } },
      industrialforegoing: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "industrialforegoing:industrial_foregoing" } } },
      integrateddynamics: { 0: { Count: 1, id: "integrateddynamics:on_the_dynamics_of_integration" } },
      laserio: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "laserio:laseriobook" } } },
      littlelogistics: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "littlelogistics:guide" } } },
      modonomicon: { 0: { Count: 1, id: "modonomicon:modonomicon", tag: { "modonomicon:book_id": "theurgy:the_hermetica" } } },
      modularrouters: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "modularrouters:book" } } },
      mysticalagriculture: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "mysticalagriculture:guide" } } },
      naturesaura: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "naturesaura:book" } } },
      occultism: { 0: { Count: 1, id: "occultism:dictionary_of_spirits", tag: { "modonomicon:book_id": "occultism:dictionary_of_spirits" } } },
      pneumaticcraft: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "pneumaticcraft:book" } } },
      powah: { 0: { Count: 1, id: "powah:book" } },
      productivebees: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "productivebees:guide" } } },
      rebornstorage: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "rebornstorage:rs_book" } } },
      rftoolsbase: { 0: { Count: 1, id: "rftoolsbase:manual" } },
      sebastrnlib: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "sebastrnlib:sebastrn_mods_guide_book" } } },
      securitycraft: { 0: { Count: 1, id: "securitycraft:sc_manual" } },
      solcarrot: { 0: { Count: 1, id: "solcarrot:food_book" } },
      thermal: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "thermal:guidebook" } } }
    },
    "eccentrictome:version": 1
  }
)

ServerEvents.recipes(event => {
  event.shapeless(EccentricTome, ['eccentrictome:tome', 'minecraft:stick']).id('kubejs:full_tome')
})
