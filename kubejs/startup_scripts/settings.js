let settings = JsonIO.read('kubejs/CustomPackSettings.json5')
console.log(settings)

global['nuke'] = settings.disableNukes
global['chunk'] = settings.disableChunkLoaders
global['devLogging'] = settings.extraLogging