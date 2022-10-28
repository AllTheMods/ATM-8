ServerEvents.recipes(event => {
  // Twilight Mini Structure
  event.custom({
  "type": "mysticalagriculture:awakening",
  "essences": {
    "air": 40,
    "earth": 40,
    "water": 40,
    "fire": 40
  },
  "input": {
    "item": "twilightforest:snow_queen_trophy"
  },
  "ingredients": [
    {
      "item": "twilightforest:fiery_block"
    },
    {
      "item": "twilightforest:knightmetal_block"
    },
    {
      "item": "twilightforest:steeleaf_block"
    },
    {
      "item": "twilightforest:carminite_block"
    }
  ],
  "result": {
    "item": "twilightforest:twilight_portal_miniature_structure"
	}
	}).id(`kubejs:awakening/twilight_portal_miniature_structure`)
})