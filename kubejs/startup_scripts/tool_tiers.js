const $TierSortingRegistry = Java.loadClass('net.minecraftforge.common.TierSortingRegistry')
const $Tiers = Java.loadClass('net.minecraft.world.item.Tiers')

// botania & aiot
const $BotaniaAPI = Java.loadClass('vazkii.botania.api.BotaniaAPI')
const $AIOTBotaniaTiers = Java.loadClass('de.melanx.aiotbotania.items.ItemTiers')
// ae2
const $FluixToolType = Java.loadClass('appeng.items.tools.fluix.FluixToolType')
const $QuartzToolType = Java.loadClass('appeng.items.tools.quartz.QuartzToolType')
// blue skies
const $SkiesItemTier = Java.loadClass('com.legacy.blue_skies.items.util.SkiesItemTier')

ItemEvents.toolTierRegistry(event => {
  console.log('tool tier')
  let botaniaInstance = $BotaniaAPI.instance()
  let Manasteel = botaniaInstance.getManasteelItemTier()
  $TierSortingRegistry.registerTier(Manasteel, "botania:manasteel", [$Tiers.IRON], [$Tiers.DIAMOND])
  let Elementium = botaniaInstance.getElementiumItemTier()
  $TierSortingRegistry.registerTier(Elementium, "botania:elementium", [Manasteel], [$Tiers.DIAMOND])
  let Terrasteel = botaniaInstance.getTerrasteelItemTier()
  $TierSortingRegistry.registerTier(Terrasteel, "botania:terrasteel", [$Tiers.DIAMOND], [$Tiers.NETHERITE])

  let LivingWood = $AIOTBotaniaTiers.LIVINGWOOD_ITEM_TIER
  $TierSortingRegistry.registerTier(LivingWood, "aiotbotania:livingwood", [$Tiers.WOOD], [$Tiers.STONE])
  let LivingRock = $AIOTBotaniaTiers.LIVINGROCK_ITEM_TIER
  $TierSortingRegistry.registerTier(LivingRock, "aiotbotania:livingrock", [$Tiers.STONE], [$Tiers.IRON])

  let Certus = $QuartzToolType.CERTUS.getToolTier()
  $TierSortingRegistry.registerTier(Certus, "ae2:certus_quartz", [$Tiers.IRON], [$Tiers.DIAMOND])
  let Nether = $QuartzToolType.NETHER.getToolTier()
  $TierSortingRegistry.registerTier(Nether, "ae2:nether_quartz", [Certus], [$Tiers.DIAMOND])
  let Fluix = $FluixToolType.FLUIX.getToolTier()
  $TierSortingRegistry.registerTier(Fluix, "ae2:fluix", [Nether, Certus], [$Tiers.DIAMOND])

  let Wood = $SkiesItemTier.WOOD
  $TierSortingRegistry.registerTier(Wood, "blue_skies:wood", [$Tiers.WOOD], [$Tiers.STONE])
  let Cherry = $SkiesItemTier.CHERRY
  $TierSortingRegistry.registerTier(Cherry, "blue_skies:cherry", [$Tiers.STONE], [$Tiers.IRON])
  let LunarStone = $SkiesItemTier.LUNAR_STONE
  $TierSortingRegistry.registerTier(LunarStone, "blue_skies:lunar_stone", [Cherry], [$Tiers.IRON])
  let TurquoiseStone = $SkiesItemTier.TURQUOISE_STONE
  $TierSortingRegistry.registerTier(TurquoiseStone, "blue_skies:turquoise_stone", [Cherry], [$Tiers.IRON])
  let Pyrope = $SkiesItemTier.PYROPE
  $TierSortingRegistry.registerTier(Pyrope, "blue_skies:pyrope", [LunarStone, TurquoiseStone], [$Tiers.IRON])
  let Aquite = $SkiesItemTier.AQUITE
  $TierSortingRegistry.registerTier(Aquite, "blue_skies:aquite", [$Tiers.IRON], [$Tiers.DIAMOND])
  let Horizonite = $SkiesItemTier.HORIZONITE
  $TierSortingRegistry.registerTier(Horizonite, "blue_skies:horizonite", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  let Charoite = $SkiesItemTier.CHAROITE
  $TierSortingRegistry.registerTier(Charoite, "blue_skies:charoite", [Horizonite], [$Tiers.NETHERITE])
  let Diopside = $SkiesItemTier.DIOPSIDE
  $TierSortingRegistry.registerTier(Diopside, "blue_skies:diopside", [Charoite], [$Tiers.NETHERITE])

})
