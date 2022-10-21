ServerEvents.tags('item', event => {
  let chemlib = Ingredient.of(/chemlib:.+?_metal_block/)
  for (const item of chemlib.stacks) {
    let metal = /chemlib:(.+?)_metal_block/.exec(item.id)
    event.add(`forge:storage_blocks/${metal[1]}`, item.id)
  }
})
