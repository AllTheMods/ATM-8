/*
    Authored by Mitchell52
    for AllTheMods 8
*/

ServerEvents.recipes(event =>{
//AllTheOres
event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": `alltheores:raw_aluminum`
    },
    "result": [
        {
        "item": `alltheores:aluminum_dust`,
        "chance": 1.25
        },
        {
        "item": 'alltheores:tin_dust',
        "chance": 0.05
        }
    ],
    "experience": 0.1
}).id(`kubejs:pulverizing_ato_aluminum`)

event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": `alltheores:raw_platinum`
    },
    "result": [
        {
        "item": `alltheores:platinum_dust`,
        "chance": 1.25
        },
        {
        "item": 'alltheores:tin_dust',
        "chance": 0.05
        }
    ],
    "experience": 0.1
}).id(`kubejs:pulverizing_ato_platinum`)

event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": `alltheores:raw_uranium`
    },
    "result": [
        {
        "item": `alltheores:uranium_dust`,
        "chance": 1.25
        },
        {
        "item": 'alltheores:lead_dust',
        "chance": 0.05
        }
    ],
    "experience": 0.1
}).id(`kubejs:pulverizing_ato_uranium`)

event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": `alltheores:raw_zinc`
    },
    "result": [
        {
        "item": `alltheores:zinc_dust`,
        "chance": 1.25
        },
        {
        "item": 'alltheores:copper_dust',
        "chance": 0.05
        }
    ],
    "experience": 0.1
}).id(`kubejs:pulverizing_ato_zinc`)

event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": `alltheores:raw_iridium`
    },
    "result": [
        {
        "item": `alltheores:iridium_dust`,
        "chance": 1.25
        }
    ],
    "experience": 0.1
}).id(`kubejs:pulverizing_ato_iridium`)

event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": `alltheores:raw_osmium`
    },
    "result": [
        {
        "item": `alltheores:osmium_dust`,
        "chance": 1.25
        }
    ],
    "experience": 0.1
}).id(`kubejs:pulverizing_ato_osmium`)

//AllTheModium
let atm_ores = ['allthemodium','unobtainium','vibranium',]
atm_ores.forEach(atm_ores =>
    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
          "item": `allthemodium:raw_${atm_ores}`
        },
        "result": [
            {
            "item": `allthemodium:${atm_ores}_dust`,
            "chance": 1.25
            },
            {
            "item": 'alltheores:netherite_dust',
            "chance": 0.05
            }
        ],
        "experience": 0.1
    }).id(`kubejs:pulverizing_${atm_ores}`)
)
//Sgear
event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": `silentgear:raw_azure_silver`
    },
    "result": [
        {
        "item": `silentgear:azure_silver_dust`,
        "chance": 1.25
        },
        {
        "item": 'alltheores:silver_dust',
        "chance": 0.05
        }
    ],
    "experience": 0.1
}).id(`kubejs:pulverizing_azure_silver`)
event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": 'silentgear:raw_crimson_iron'
    },
    "result": [
        {
        "item": 'silentgear:crimson_iron_dust',
        "chance": 1.25
        },
        {
        "item": 'alltheores:iron_dust',
        "chance": 0.05
        }
    ],
    "experience": 0.1
}).id(`kubejs:pulverizing_crimson_iron`)

})