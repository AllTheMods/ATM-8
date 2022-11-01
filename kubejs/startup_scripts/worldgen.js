WorldgenEvents.remove(event => {
  event.removeOres(ore => {
    ore.blocks = [
      'ftbic:tin_ore',
      'ftbic:deepslate_tin_ore',
      'ftbic:lead_ore',
      'ftbic:deepslate_lead_ore',
      'ftbic:uranium_ore',
      'ftbic:deepslate_uranium_ore',
      'ftbic:aluminum_ore',
      'ftbic:deepslate_aluminum_ore',
      'ftbic:iridium_ore',
      'ftbic:deepslate_iridium_ore',
      'occultism:silver_ore',
      'occultism:silver_ore_deepslate',
      'xycraft_world:aluminum_ore_stone',
      'xycraft_world:aluminum_ore_deepslate'
    ]
  })
})
