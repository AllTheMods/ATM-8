ServerEvents.tags('item', event => {
  event.add('refinedstorage:silicon', '#forge:silicon')
})

ServerEvents.recipes(event => {
  // silicon unifying
  /* hold for tag fix
  event.replaceInput({}, '#refinedstorage:silicon', '#forge:silicon')
  */

  // Infinite Booster
  event.remove({ id: 'rsinfinitybooster:infinity_card' })
  event.shaped('rsinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
    U: '#forge:ingots/unobtainium',
    B: 'refinedstorage:range_upgrade',
    E: '#forge:plates/enderium',
    N: 'minecraft:netherite_ingot'
  }).id('kubejs:rsinfinitybooster/infinity_card')


  // Crafters
  event.remove({ id: 'extrastorage:iron_crafter' })
  event.shaped('extrastorage:iron_crafter', ['B B', 'PCP', 'B B'], {
    B: '#forge:storage_blocks/iron',
    P: 'refinedstorage:improved_processor',
    C: '#refinedstorage:crafter'
  }).id('kubejs:extrastorage/iron_crafter')
  event.remove({ id: 'extrastorage:gold_crafter' })
  event.shaped('extrastorage:gold_crafter', ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/gold',
    P: 'extrastorage:neural_processor',
    C: 'extrastorage:iron_crafter'
  }).id('kubejs:extrastorage/gold_crafter')
  event.remove({ id: 'extrastorage:diamond_crafter' })
  event.shaped('extrastorage:diamond_crafter', ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/diamond',
    P: 'extrastorage:neural_processor',
    C: 'extrastorage:gold_crafter'
  }).id('kubejs:extrastorage/diamond_crafter')
  event.remove({ id: 'extrastorage:netherite_crafter' })
  event.shaped('extrastorage:netherite_crafter', ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/netherite',
    P: 'extrastorage:neural_processor',
    C: 'extrastorage:diamond_crafter'
  }).id('kubejs:extrastorage/netherite_crafter')

  /* Possible Future Addition
  event.remove({ id: 'creativecrafter:creative_crafter' })
  event.shaped('creativecrafter:creative_crafter', ['BUB', 'PCP', 'BUB'], {
    B: '#forge:storage_blocks/netherite',
    P: 'extradisks:withering_processor',
    C: 'extrastorage:netherite_crafter',
    U: '#forge:ingots/unobtainium'
  }).id('kubejs:creativecrafter/creative_crafter')
  */

  // Storage Parts
  // removes overlapping extra storage parts
  event.remove({ id: /^extrastorage:(?:part|disk|storage_block)\/.+/ })
  // removes overlapping reborn storage parts
  event.remove({ id: /^rebornstorage:(?:disks|parts)\/(small|medium|large|larger).+/ })

  event.remove({ id: 'extradisks:part/4096k_storage_part' })
  event.shaped('extradisks:4096k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: '#refinedstorage:parts/items/1024k',
    b: '#forge:dusts/redstone',
    n: '#forge:nuggets/allthemodium'
  }).id('kubejs:extradisks/part/4096k_storage_part')
  event.remove({ id: 'extradisks:part/16384k_storage_part' })
  event.shaped('extradisks:16384k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: '#refinedstorage:parts/items/4096k',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/allthemodium'
  }).id('kubejs:extradisks/part/16384k_storage_part')
  event.remove({ id: 'extradisks:part/65536k_storage_part' })
  event.shaped('extradisks:65536k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: '#refinedstorage:parts/items/16384k',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/allthemodium'
  }).id('kubejs:extradisks/part/65536k_storage_part')
  event.remove({ id: 'extradisks:part/262144k_storage_part' })
  event.shaped('extradisks:262144k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'extradisks:withering_processor',
    f: '#refinedstorage:parts/items/65536k',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/vibranium'
  }).id('kubejs:extradisks/part/262144k_storage_part')
  event.remove({ id: 'extradisks:part/1048576k_storage_part' })
  event.shaped('extradisks:1048576k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'extradisks:withering_processor',
    f: '#refinedstorage:parts/items/262144k',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/unobtainium'
  }).id('kubejs:extradisks/part/1048576k_storage_part')
  event.remove({ id: 'extradisks:part/infinite_storage_part' })
  event.shaped('extradisks:infinite_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'extradisks:withering_processor',
    f: '#refinedstorage:parts/items/1048576k',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/unobtainium'
  }).id('kubejs:extradisks/part/infinite_storage_part')

  event.remove({ id: 'extradisks:part/16384k_fluid_storage_part' })
  event.shaped('extradisks:16384k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'refinedstorage:4096k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:nuggets/allthemodium'
  }).id('kubejs:extradisks/part/16384k_fluid_storage_part')
  event.remove({ id: 'extradisks:part/65536k_fluid_storage_part' })
  event.shaped('extradisks:65536k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: '#refinedstorage:parts/fluids/16384k',
    b: 'minecraft:bucket',
    n: '#forge:ingots/allthemodium'
  }).id('kubejs:extradisks/part/65536k_fluid_storage_part')
  event.remove({ id: 'extradisks:part/262144k_fluid_storage_part' })
  event.shaped('extradisks:262144k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: '#refinedstorage:parts/fluids/65536k',
    b: 'minecraft:bucket',
    n: '#forge:ingots/vibranium'
  }).id('kubejs:extradisks/part/262144k_fluid_storage_part')
  event.remove({ id: 'extradisks:part/1048576k_fluid_storage_part' })
  event.shaped('extradisks:1048576k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'extradisks:withering_processor',
    f: '#refinedstorage:parts/fluids/262144k',
    b: 'minecraft:bucket',
    n: '#forge:ingots/unobtainium'
  }).id('kubejs:extradisks/part/1048576k_fluid_storage_part')
  event.remove({ id: 'extradisks:part/infinite_fluid_storage_part' })
  event.shaped('extradisks:infinite_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'extradisks:withering_processor',
    f: '#refinedstorage:parts/fluids/1048576k',
    b: 'minecraft:bucket',
    n: '#forge:ingots/unobtainium'
  }).id('kubejs:extradisks/part/infinite_fluid_storage_part')

  // Cable Tiers
  event.remove({ id: /extrastorage:advanced_(importer|exporter)/ })
  // Modify recipes to take half as many of previous tier
  event.forEachRecipe({ mod: 'cabletiers' }, recipe => {
    let pattern = recipe.json.get('pattern')
    let center = pattern.get(1).getAsString()
    pattern.set(1, center.replace(center.substring(0, 1), ' '))
    recipe.json.add('pattern', pattern)
    if (recipe.getId().contains('creative')) {
      let key = recipe.json.get('key')
      key.add(center.substring(1, 2), Ingredient.of('extradisks:withering_processor').toJson())
      recipe.json.add('key', key)
    }
  })
})

