ServerEvents.recipes(event => {
	
// ATM-Vibranium Ingot
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
      Ingredient.of('allthemodium:vibranium_ingot').toJson()
    ],
    energy: '100000000',
    result: Item.of('allthemodium:vibranium_allthemodium_alloy_ingot').toJson()
  }).id(`kubejs:energizing/allthemodium:vibranium_allthemodium_alloy_ingot`)
  ,
  
  
 // ATM-Vibranium Block
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_block').toJson(),
      Ingredient.of('allthemodium:vibranium_block').toJson()
    ],
    energy: '1000000000',
    result: Item.of('allthemodium:vibranium_allthemodium_alloy_block').toJson()
  }).id(`kubejs:energizing/allthemodium:vibranium_allthemodium_alloy_block`)
  ,


 // ATM-Unobtainium Ingot
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
      Ingredient.of('allthemodium:unobtainium_ingot').toJson()
    ],
    energy: '250000000',
    result: Item.of('allthemodium:unobtainium_allthemodium_alloy_ingot').toJson()
  }).id(`kubejs:energizing/allthemodium:unobtainium_allthemodium_alloy_ingot`)
  ,
  
// ATM-Unobtainium Block
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_block').toJson(),
      Ingredient.of('allthemodium:unobtainium_block').toJson()
    ],
    energy: '2500000000',
    result: Item.of('allthemodium:unobtainium_allthemodium_alloy_block').toJson()
  }).id(`kubejs:energizing/allthemodium:unobtainium_allthemodium_alloy_block`)
  ,
  
  
 // Vibranium-Unobtainium Ingot
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:vibranium_ingot').toJson(),
      Ingredient.of('allthemodium:unobtainium_ingot').toJson()
    ],
    energy: '125000000',
    result: Item.of('allthemodium:unobtainium_vibranium_alloy_ingot').toJson()
  }).id(`kubejs:energizing/allthemodium:unobtainium_vibranium_alloy_ingot`)
  ,
  
  
// Vibranium-Unobtainium Block
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:vibranium_block').toJson(),
      Ingredient.of('allthemodium:unobtainium_block').toJson()
    ],
    energy: '1250000000',
    result: Item.of('allthemodium:unobtainium_vibranium_alloy_block').toJson()
  }).id(`kubejs:energizing/allthemodium:unobtainium_vibranium_alloy_block`)
  
})
