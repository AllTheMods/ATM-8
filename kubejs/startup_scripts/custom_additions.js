StartupEvents.registry('block', event => {
	event.create('magical_soil').displayName('§bMagical Soil').material('grass').hardness(0.6);
  event.create('piglich_heart_block').displayName('§6Piglich Heart Block').material('stone')
				.hardness(10).tagBlock('minecraft:needs_iron_tool').tagBlock('minecraft:beacon_base_blocks')
				.lightLevel(0.65).tagBlock('minecraft:mineable/pickaxe').requiresTool(true);
})
