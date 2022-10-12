ServerEvents.recipes(event => {
 event.remove({id: 'structures_compass:structures_compass'})
 event.shaped('structures_compass:structures_compass', [
    'NAN',
    'ACA',
    'NAN'
  ], {
    A: 'allthemodium:allthemodium_ingot',
    N: 'minecraft:netherite_ingot',
    C: 'naturescompass:naturescompass',
  })
  })
