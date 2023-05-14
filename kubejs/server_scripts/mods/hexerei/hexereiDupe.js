/*
    temporary dupe fix for Hexerei drying racks
    until fixed upstream (current v0.3.0)

    authored by EnigmaQuip
    for ATM8
*/

BlockEvents.broken(event => {
  const { block } = event
  if (/hexerei:.+?_drying_rack/.test(block.id)) {
    if (block.entityId == 'hexerei:drying_rack_entity') {
      let te = block.entity
      // remove from storage before block broken
      for (let i = 0; i < 3; i++) {
        let dropItem = te.removeItem(i, te.getMaxStackSize())
        block.popItem(dropItem)
      }
    }
  }
})