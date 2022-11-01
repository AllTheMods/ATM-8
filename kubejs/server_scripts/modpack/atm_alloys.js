ServerEvents.recipes(event => {
	
// ATM-Vibranium Ingot
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
	  Ingredient.of('allthemodium:piglich_heart').toJson(),
	  Ingredient.of('allthemodium:vibranium_ingot').toJson()
	  
    ],
    energy: '1000000000',
	result: Item.of('allthemodium:vibranium_allthemodium_alloy_ingot').toJson()
  }).id(`kubejs:energizing/allthemodium_vibranium_allthemodium_alloy_ingot`)
  
  
 // ATM-Vibranium Block
 /*
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_block').toJson(),
      Ingredient.of('allthemodium:vibranium_block').toJson()
    ],
    energy: '1000000000',
    result: Item.of('allthemodium:vibranium_allthemodium_alloy_block').toJson()
  }).id(`kubejs:energizing/allthemodium_vibranium_allthemodium_alloy_block`)
*/

 // ATM-Unobtainium Ingot
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
      Ingredient.of('allthemodium:piglich_heart').toJson(),
	  Ingredient.of('allthemodium:unobtainium_ingot').toJson()
	  
    ],
    energy: '1000000000',
    result: Item.of('allthemodium:unobtainium_allthemodium_alloy_ingot').toJson()
  }).id(`kubejs:energizing/allthemodium_unobtainium_allthemodium_alloy_ingot`)
  
// ATM-Unobtainium Block
/*
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_block').toJson(),
      Ingredient.of('allthemodium:unobtainium_block').toJson()
    ],
    energy: '2500000000',
    result: Item.of('allthemodium:unobtainium_allthemodium_alloy_block').toJson()
  }).id(`kubejs:energizing/allthemodium_unobtainium_allthemodium_alloy_block`)
  */
  
  
 // Unobtainium-Vibranium Ingot
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:vibranium_ingot').toJson(),
      Ingredient.of('allthemodium:piglich_heart').toJson(),
	  Ingredient.of('allthemodium:unobtainium_ingot').toJson()
	  
    ],
    energy: '1000000000',
    result: Item.of('allthemodium:unobtainium_vibranium_alloy_ingot').toJson()
  }).id(`kubejs:energizing/allthemodium_unobtainium_vibranium_alloy_ingot`)
  
// Unobtainium-Vibranium Awakened Block
  event.custom({
  "type": "mysticalagriculture:awakening",
  "essences": {
    "air": 40,
    "earth": 40,
    "water": 40,
    "fire": 40
  },
  "input": {
    "item": "allthemodium:unobtainium_vibranium_alloy_block"
  },
  "ingredients": [
    {
      "item": "allthemodium:vibranium_block"
    },
    {
      "item": "allthemodium:unobtainium_block"
    },
    {
      "item": "allthemodium:vibranium_block"
    },
    {
      "item": "allthemodium:unobtainium_block"
    }
  ],
  "result":  
	Item.of('allthemodium:unobtainium_vibranium_alloy_block', "{HideFlags:1,display:{Name:'[{\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()

}).id(`kubejs:awakening/awakened_unobtainium_vibranium_alloy_block`)
  
// Unobtainium-Vibranium Block
/*
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:vibranium_block').toJson(),
      Ingredient.of('allthemodium:unobtainium_block').toJson()
    ],
    energy: '1250000000',
    result: Item.of('allthemodium:unobtainium_vibranium_alloy_block').toJson()
  }).id(`kubejs:energizing/allthemodium_unobtainium_vibranium_alloy_block`)
  
*/
  
})
