let settings = JsonIO.read('kubejs/CustomPackSettings.json')
if (settings == null) {
    settings = {
        disableNukes: false,
        disableChunkLoaders: false,
        extraLogging: false,
        _comments: "disableNukes will not allow ftbic or industrial foregoing nukes to be placed in world. disableChunkLoaders will give more operator control by removing all chunkloader blocks so FTB Chunks is the only loader. extraLogging is mostly for development work"
    }
    JsonIO.write('kubejs/CustomPackSettings.json', settings)
}

global['nuke'] = settings.disableNukes
global['chunk'] = settings.disableChunkLoaders
global['devLogging'] = settings.extraLogging