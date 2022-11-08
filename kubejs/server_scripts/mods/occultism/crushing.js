ServerEvents.recipes(e => {
    let atoMetals = ['aluminum', 'osmium', 'platinum', 'zinc', 'uranium', 'tin', 'lead', 'silver', 'nickel', 'iridium']
    let atmMetals = ['allthemodium', 'vibranium', 'unobtainium']
    let vanillaMetals = ['iron', 'gold', 'copper']
    
      let craftOverride = {
        allthemodium: 'allthemodium',
        vibranium: 'allthemodium',
        unobtainium: 'allthemodium',
        compressed_iron: 'pneumaticcraft',
        crimson_iron: 'silentgear',
        azure_silver: 'silentgear',
        iesnium: 'occultism'
      }
    
      function occultismUnifyCrusher(input, type) {
        let outputCount = 2;
        let ignoreMultiplyer = false;
        let time = 200;
    
        if (type === 'ingot') {
          outputCount = 1;
          ignoreMultiplyer = true;
          e.remove({ id: `occultism:crushing/${input}_dust_from_ingot` });
        }
    
        if (type === 'ore') {
          time = 300;
          e.remove({ id: `occultism:crushing/${input}_dust` });
        }
    
        if (type === 'raw_material') {
          e.remove({ id: `occultism:crushing/${input}_dust_from_raw_material` });
        }

        
        e.custom({
          "type": "occultism:crushing",
          "ingredient": Ingredient.of(`#forge:${type}s/${input}`).toJson(),
          "result": Item.of(`${craftOverride[input] ?? 'alltheores'}:${input}_dust`, outputCount).toJson(),
          "crushing_time": time,
          "ignore_crushing_multiplier": ignoreMultiplyer
        }).id(`kubejs:occultcrushing/${input}_dust_from_${type}`);
      }

      atoMetals.concat(vanillaMetals, atmMetals).forEach(ore => {
        ['ore', 'ingot', 'raw_material'].forEach(type => occultismUnifyCrusher(ore, type));
      });

      ['crimson_iron', 'azure_silver', 'iesnium'].forEach(ore => {
        ['ore', 'ingot', 'raw_material'].forEach(type => occultismUnifyCrusher(ore, type));
      });



})