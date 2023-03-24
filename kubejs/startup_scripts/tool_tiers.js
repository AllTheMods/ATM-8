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
// mystical agriculture
const $MAItemTier = Java.loadClass('com.blakebr0.mysticalagriculture.lib.ModItemTier')
// nature's aura
const $NaturesItemTier = Java.loadClass('de.ellpeck.naturesaura.reg.ModItemTier')
// occultism
const $OccultismItemTier = Java.loadClass('com.github.klikli_dev.occultism.api.common.misc.OccultismItemTier')
// spirit
const $SpiritItemTier = Java.loadClass('me.codexadrian.spirit.items.SoulMetalMaterial')
// ie
const $IEItemTier = Java.loadClass('blusunrize.immersiveengineering.api.Lib')
// aquaculture
const $AquacultureAPI = Java.loadClass('com.teammetallurgy.aquaculture.api.AquacultureAPI')
// deeper and darker
const $DDItemTier = Java.loadClass('com.kyanite.deeperdarker.miscellaneous.DDTiers')
// byg
const $BYGItemTier = Java.loadClass('potionstudios.byg.common.item.BYGTier')
// redstone arsenal
const $RSAItemTier = Java.loadClass('cofh.redstonearsenal.init.RSAItems')

StartupEvents.postInit(event => {
  let botaniaInstance = $BotaniaAPI.instance()
  let Manasteel = botaniaInstance.getManasteelItemTier()
  if (!$TierSortingRegistry.isTierSorted(Manasteel)) {
    $TierSortingRegistry.registerTier(Manasteel, "botania:manasteel", [$Tiers.IRON], [$Tiers.DIAMOND])
  }
  let Elementium = botaniaInstance.getElementiumItemTier()
  if (!$TierSortingRegistry.isTierSorted(Elementium)) {
    $TierSortingRegistry.registerTier(Elementium, "botania:elementium", [Manasteel], [$Tiers.DIAMOND])
  }
  let Terrasteel = botaniaInstance.getTerrasteelItemTier()
  if (!$TierSortingRegistry.isTierSorted(Terrasteel)) {
    $TierSortingRegistry.registerTier(Terrasteel, "botania:terrasteel", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }
  let LivingWood = $AIOTBotaniaTiers.LIVINGWOOD_ITEM_TIER
  if (!$TierSortingRegistry.isTierSorted(LivingWood)) {
    $TierSortingRegistry.registerTier(LivingWood, "aiotbotania:livingwood", [$Tiers.WOOD], [$Tiers.STONE])
  }
  let LivingRock = $AIOTBotaniaTiers.LIVINGROCK_ITEM_TIER
  if (!$TierSortingRegistry.isTierSorted(LivingRock)) {
    $TierSortingRegistry.registerTier(LivingRock, "aiotbotania:livingrock", [$Tiers.STONE], [$Tiers.IRON])
  }

  let Certus = $QuartzToolType.CERTUS.getToolTier()
  if (!$TierSortingRegistry.isTierSorted(Certus)) {
    $TierSortingRegistry.registerTier(Certus, "ae2:certus_quartz", [$Tiers.IRON], [$Tiers.DIAMOND])
  }
  let Nether = $QuartzToolType.NETHER.getToolTier()
  if (!$TierSortingRegistry.isTierSorted(Nether)) {
    $TierSortingRegistry.registerTier(Nether, "ae2:nether_quartz", [Certus], [$Tiers.DIAMOND])
  }
  let Fluix = $FluixToolType.FLUIX.getToolTier()
  if (!$TierSortingRegistry.isTierSorted(Fluix)) {
    $TierSortingRegistry.registerTier(Fluix, "ae2:fluix", [Nether, Certus], [$Tiers.DIAMOND])
  }

  let Wood = $SkiesItemTier.WOOD
  if (!$TierSortingRegistry.isTierSorted(Wood)) {
    $TierSortingRegistry.registerTier(Wood, "blue_skies:wood", [$Tiers.WOOD], [$Tiers.STONE])
  }
  let Cherry = $SkiesItemTier.CHERRY
  if (!$TierSortingRegistry.isTierSorted(Cherry)) {
    $TierSortingRegistry.registerTier(Cherry, "blue_skies:cherry", [$Tiers.STONE], [$Tiers.IRON])
  }
  let LunarStone = $SkiesItemTier.LUNAR_STONE
  if (!$TierSortingRegistry.isTierSorted(LunarStone)) {
    $TierSortingRegistry.registerTier(LunarStone, "blue_skies:lunar_stone", [Cherry], [$Tiers.IRON])
  }
  let TurquoiseStone = $SkiesItemTier.TURQUOISE_STONE
  if (!$TierSortingRegistry.isTierSorted(TurquoiseStone)) {
    $TierSortingRegistry.registerTier(TurquoiseStone, "blue_skies:turquoise_stone", [Cherry], [$Tiers.IRON])
  }
  let Pyrope = $SkiesItemTier.PYROPE
  if (!$TierSortingRegistry.isTierSorted(Pyrope)) {
    $TierSortingRegistry.registerTier(Pyrope, "blue_skies:pyrope", [LunarStone, TurquoiseStone], [$Tiers.IRON])
  }
  let Aquite = $SkiesItemTier.AQUITE
  if (!$TierSortingRegistry.isTierSorted(Aquite)) {
    $TierSortingRegistry.registerTier(Aquite, "blue_skies:aquite", [$Tiers.IRON], [$Tiers.DIAMOND])
  }
  let Horizonite = $SkiesItemTier.HORIZONITE
  if (!$TierSortingRegistry.isTierSorted(Horizonite)) {
    $TierSortingRegistry.registerTier(Horizonite, "blue_skies:horizonite", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }
  let Charoite = $SkiesItemTier.CHAROITE
  if (!$TierSortingRegistry.isTierSorted(Charoite)) {
    $TierSortingRegistry.registerTier(Charoite, "blue_skies:charoite", [Horizonite], [$Tiers.NETHERITE])
  }
  let Diopside = $SkiesItemTier.DIOPSIDE
  if (!$TierSortingRegistry.isTierSorted(Diopside)) {
    $TierSortingRegistry.registerTier(Diopside, "blue_skies:diopside", [Charoite], [$Tiers.NETHERITE])
  }

  let Awakened = $MAItemTier.AWAKENED_SUPREMIUM
  if (!$TierSortingRegistry.isTierSorted(Awakened)) {
    $TierSortingRegistry.registerTier(Awakened, "mysticalagriculture:awakened_supremium", [$MAItemTier.SUPREMIUM], [])
  }

  let NAInfused = $NaturesItemTier.INFUSED
  if (!$TierSortingRegistry.isTierSorted(NAInfused)) {
    $TierSortingRegistry.registerTier(NAInfused, "naturesaura:infused_iron", [$Tiers.IRON], [$Tiers.DIAMOND])
  }
  let NASky = $NaturesItemTier.SKY
  if (!$TierSortingRegistry.isTierSorted(NASky)) {
    $TierSortingRegistry.registerTier(NASky, "naturesaura:sky", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }
  let NADepth = $NaturesItemTier.DEPTH
  if (!$TierSortingRegistry.isTierSorted(NADepth)) {
    $TierSortingRegistry.registerTier(NADepth, "naturesaura:depth", [$Tiers.NETHERITE], [])
  }

  let SpiritAttunedGem = $OccultismItemTier.SPIRIT_ATTUNED_GEM
  if (!$TierSortingRegistry.isTierSorted(SpiritAttunedGem)) {
    $TierSortingRegistry.registerTier(SpiritAttunedGem, "occultism:spirit_attuned_gem", [$Tiers.IRON], [$Tiers.DIAMOND])
  }

  let SoulMetal = $SpiritItemTier.INSTANCE
  if (!$TierSortingRegistry.isTierSorted(SoulMetal)) {
    $TierSortingRegistry.registerTier(SoulMetal, "spirit:soul_metal", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }

  let IESteel = $IEItemTier.MATERIAL_Steel
  if (!$TierSortingRegistry.isTierSorted(IESteel)) {
    $TierSortingRegistry.registerTier(IESteel, "immersiveengineering:steel", [$Tiers.IRON], [$Tiers.DIAMOND])
  }

  let Neptunium = $AquacultureAPI.MATS.NEPTUNIUM
  if (!$TierSortingRegistry.isTierSorted(Neptunium)) {
    $TierSortingRegistry.registerTier(Neptunium, "aquaculture:neptunium", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }

  let Warden = $DDItemTier.WARDEN
  if (!$TierSortingRegistry.isTierSorted(Warden)) {
    $TierSortingRegistry.registerTier(Warden, "deeperdarker:warden", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }

  let Pendorite = $BYGItemTier.PENDORITE
  if (!$TierSortingRegistry.isTierSorted(Pendorite)) {
    $TierSortingRegistry.registerTier(Pendorite, "byg:pendorite", [$Tiers.NETHERITE], [])
  }

  let FluxMetal = $RSAItemTier.MATERIAL_FLUX_METAL
  if (!$TierSortingRegistry.isTierSorted(FluxMetal)) {
    $TierSortingRegistry.registerTier(FluxMetal, "redstone_arsenal:flux_metal", [$Tiers.NETHERITE], [])
  }
})