BlockEvents.rightClicked(event => {
  if (global.nuke) {
    if (event.item == 'ftbic:nuke') {
      event.cancel()
    }
    if (event.item == 'industrialforegoing:infinity_nuke') {
      event.cancel()
      event.entity.inventoryMenu.broadcastFullState()
    }
  }
})

BlockEvents.placed('ftbic:nuke', event => {
  if (global.nuke) {
    event.cancel()
  }
})

EntityEvents.spawned('industrialforegoing:infinity_nuke', event => {
  if (global.nuke) {
    event.cancel()
  }
})