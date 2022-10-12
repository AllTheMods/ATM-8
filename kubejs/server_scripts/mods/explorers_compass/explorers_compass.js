ServerEvents.recipes(event => {
 event.remove({id: 'explorerscompass:explorerscompass'})
 event.shaped('explorerscompass:explorerscompass', [
    'NAN',
    'ACA',
    'NAN'
  ], {
    A: 'allthemodium:allthemodium_ingot',
    N: 'minecraft:netherite_ingot',
    C: 'naturescompass:naturescompass',
  })
  })
