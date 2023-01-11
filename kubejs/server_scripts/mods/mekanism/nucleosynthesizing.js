ServerEvents.recipes(e => {
	// The base amount of antimatter gas, in millibuckets (mB).
	const baseAmount = 10;
	// The base duration of the reaction, in ticks.
	const baseDuration = 100;
	// Should the amount of antimatter and time scale with the level of the enchantment?
	const scaleWithLevel = false;

	// The book enchantments to be added as recipes.
	const enchants = [
		{ id: 'minecraft:protection', vanilla_max: 4, max: 8 },
		{ id: 'minecraft:fire_protection', vanilla_max: 4, max: 9 },
		{ id: 'minecraft:feather_falling', vanilla_max: 4, max: 11 },
		{ id: 'minecraft:blast_protection', vanilla_max: 4, max: 9 },
		{ id: 'minecraft:projectile_protection', vanilla_max: 4, max: 11 },
		{ id: 'minecraft:respiration', vanilla_max: 3, max: 7 },
		{ id: 'minecraft:thorns', vanilla_max: 3, max: 5 },
		{ id: 'minecraft:depth_strider', vanilla_max: 3, max: 7 },
		{ id: 'minecraft:frost_walker', vanilla_max: 2, max: 7 },
		{ id: 'minecraft:soul_speed', vanilla_max: 3, max: 7 },
		{ id: 'minecraft:swift_sneak', vanilla_max: 3, max: 7 },
		{ id: 'minecraft:sharpness', vanilla_max: 5, max: 9 },
		{ id: 'minecraft:smite', vanilla_max: 5, max: 10 },
		{ id: 'minecraft:bane_of_arthropods', vanilla_max: 5, max: 10 },
		{ id: 'minecraft:knockback', vanilla_max: 2, max: 5 },
		{ id: 'minecraft:fire_aspect', vanilla_max: 2, max: 5 },
		{ id: 'minecraft:looting', vanilla_max: 3, max: 8 },
		{ id: 'minecraft:sweeping_edge', vanilla_max: 3, max: 8 },
		{ id: 'minecraft:efficiency', vanilla_max: 5, max: 9 },
		{ id: 'minecraft:unbreaking', vanilla_max: 4, max: 8 },
		{ id: 'minecraft:fortune', vanilla_max: 3, max: 8 },
		{ id: 'minecraft:power', vanilla_max: 5, max: 9 },
		{ id: 'minecraft:luck_of_the_sea', vanilla_max: 3, max: 8 },
		{ id: 'minecraft:lure', vanilla_max: 3, max: 8 },
		{ id: 'minecraft:loyalty', vanilla_max: 3, max: 9 },
		{ id: 'minecraft:impaling', vanilla_max: 5, max: 10 },
		{ id: 'minecraft:riptide', vanilla_max: 3, max: 9 },
		{ id: 'minecraft:quick_charge', vanilla_max: 3, max: 5 },
		{ id: 'minecraft:piercing', vanilla_max: 4, max: 8 },
	];

	enchants.forEach(enchant => {
		let level = enchant.vanilla_max + 1;
		
		// Add each enchantment level.
		for (let scale = 1; level <= enchant.max; level++, scale++) {
			let amount = baseAmount;
			let duration = baseDuration;
			
			if (scaleWithLevel) {
				amount *= scale;
			}

			e.custom({
				"type": "mekanism:nucleosynthesizing",
				"duration": baseDuration,
				"gasInput": {
					"amount": amount,
					"gas": "mekanism:antimatter"
				},
				"itemInput": {
					"ingredient": {
						"type": "forge:nbt",
						"count": 1,
						"item": "minecraft:enchanted_book",
						"nbt": `{StoredEnchantments:[{id:\"${enchant.id}\",lvl:${level - 1}s}]}`
					}
				},
				"output": {
					"item": "minecraft:enchanted_book",
					"nbt": `{StoredEnchantments:[{id:\"${enchant.id}\",lvl:${level}s}]}`
				}
			});
		}
	});
});
