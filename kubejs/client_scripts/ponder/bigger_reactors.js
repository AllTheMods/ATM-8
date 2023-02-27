Ponder.registry((event) => {
    event.create([
        'biggerreactors:reactor_power_tap',
        'biggerreactors:reactor_glass',
        'biggerreactors:reactor_casing',
        //'biggerreactors:reactor_manifold',
        //'biggerreactors:reactor_redstone_port',
        //'biggerreactors:reactor_computer_port',
        //'biggerreactors:reactor_coolant_port',
        'biggerreactors:reactor_access_port',
        'biggerreactors:reactor_terminal',
        'biggerreactors:reactor_control_rod',
        'biggerreactors:reactor_fuel_rod'])
        .scene('bir_1', 'Building a Bigger Reactor', 'kubejs:reactor', (scene, util) => {
            scene.world.showSection([4, 0, 4], Facing.down)
            scene.idle(5)

            scene.overlay.showText(40).text("The edges must be").independent(20)
            scene.overlay.showText(40).text("reactor casing").independent(36);
            [1, 2, 3, 4].forEach(num => {
                scene.world.showSection([4, num, 4], Facing.down);
                scene.world.showSection([4, 0, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 0, 4], Facing.down);
                scene.idle(5)
            });

            [1, 2, 3].forEach(num => {
                scene.world.showSection([4, 4, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 4, 4], Facing.down);
                scene.world.showSection([0, 0, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 0, 0], Facing.down);
                scene.world.showSection([0, num, 4], Facing.down);
                scene.world.showSection([4, num, 0], Facing.down);
                scene.idle(5)
            })
            scene.world.showSection([4, 4, 0], Facing.down);
            scene.world.showSection([0, 4, 4], Facing.down);
            scene.world.showSection([0, 0, 0], Facing.down);
            scene.idle(5);
            [1, 2, 3].forEach(num => {
                scene.world.showSection([0, num, 0], Facing.down);
                scene.world.showSection([0, 4, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 4, 0], Facing.down);
                scene.idle(5)
            })
            scene.world.showSection([0, 4, 0], Facing.down);
            scene.idle(5)

            scene.addKeyframe()

            scene.overlay.showText(35).text("The walls can be").independent(20)
            scene.overlay.showText(35).text("reactor casing").independent(36)
            scene.overlay.showText(35).text("or reactor glass").independent(52)
            //top glass
            scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.down);
            scene.idle(5)

            // bottom glass
            scene.world.showSection([1, 0, 1, 3, 0, 3], Facing.up);
            scene.idle(5)

            // north glass
            scene.world.showSection([1, 1, 0, 3, 3, 0], Facing.south);
            scene.idle(5)

            // south glass
            scene.world.showSection([1, 1, 4, 3, 3, 4], Facing.north);
            scene.idle(5)

            // west glass
            scene.world.showSection([0, 1, 1, 0, 3, 3], Facing.east);
            scene.idle(5)

            // east glass
            scene.world.showSection([4, 1, 1, 4, 3, 3], Facing.west);
            scene.idle(20)

            scene.addKeyframe()

            scene.overlay.showText(40).text("Fuel rods run floor").independent(20)
            scene.overlay.showText(40).text("to ceiling in a stack").independent(36)
            scene.idle(10)
            scene.world.hideSection([0, 1, 0, 3, 4, 3], Facing.up)
            scene.idle(15)
            scene.world.setBlock([2, 1, 2], 'biggerreactors:reactor_fuel_rod', false)
            scene.world.showSection([2, 1, 2], Facing.down)
            scene.idle(10)
            scene.world.setBlock([2, 2, 2], 'biggerreactors:reactor_fuel_rod', false)
            scene.world.showSection([2, 2, 2], Facing.down)
            scene.idle(10)
            scene.world.setBlock([2, 3, 2], 'biggerreactors:reactor_fuel_rod', false)
            scene.world.showSection([2, 3, 2], Facing.down)
            scene.idle(20)
            scene.world.showSection([0, 1, 0, 3, 4, 3], Facing.down)
            scene.idle(10)
            scene.overlay.showText(35).text("A control rod sits atop the fuel").independent(20)
            scene.overlay.showText(35).text("rod stack in the top wall").independent(36)
            scene.idle(15)
            scene.world.setBlock([2, 4, 2], 'minecraft:air', true)
            scene.world.modifyBlock([1, 4, 2], (curState) => curState.with("east_connected", false), false);
            scene.world.modifyBlock([2, 4, 1], (curState) => curState.with("south_connected", false), false);
            scene.world.modifyBlock([3, 4, 2], (curState) => curState.with("west_connected", false), false);
            scene.world.modifyBlock([2, 4, 3], (curState) => curState.with("north_connected", false), false);
            scene.idle(10)
            scene.world.setBlock([2, 4, 2], 'biggerreactors:reactor_control_rod', false)
            scene.idle(20)

            scene.addKeyframe()

            scene.overlay.showText(35).text("A terminal needs to").independent(20)
            scene.overlay.showText(35).text("be included in a wall").independent(36)
            scene.idle(10)
            scene.world.setBlock([3, 1, 0], 'minecraft:air', true)
            scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("east_connected", false), false);
            scene.world.modifyBlock([3, 2, 0], (curState) => curState.with("bottom_connected", false), false);
            scene.idle(10)
            scene.world.setBlock([3, 1, 0], 'biggerreactors:reactor_terminal', false)
            scene.idle(20)

            scene.addKeyframe()

            scene.overlay.showText(35).text("A power tap is used").independent(20)
            scene.overlay.showText(35).text("in a wall to get power").independent(36)
            scene.overlay.showText(35).text("out of the reactor").independent(52)
            scene.idle(15)
            scene.world.setBlock([1, 1, 0], 'minecraft:air', true)
            scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("west_connected", false), false);
            scene.world.modifyBlock([1, 2, 0], (curState) => curState.with("bottom_connected", false), false);
            scene.idle(10)
            scene.world.setBlock([1, 1, 0], 'biggerreactors:reactor_power_tap', false)
            scene.idle(20)

            scene.addKeyframe()

            scene.overlay.showText(40).text("Access ports allow for").independent(20)
            scene.overlay.showText(40).text("insertion of uranium").independent(36)
            scene.overlay.showText(40).text("and removal of cyanite").independent(52)
            scene.idle(15)
            scene.world.setBlock([0, 1, 1], 'minecraft:air', true)
            scene.world.setBlock([0, 1, 3], 'minecraft:air', true)
            scene.world.modifyBlock([0, 1, 2], (curState) => curState.with("north_connected", false).with("south_connected", false), false);
            scene.world.modifyBlock([0, 2, 1], (curState) => curState.with("bottom_connected", false), false);
            scene.world.modifyBlock([0, 2, 3], (curState) => curState.with("bottom_connected", false), false);
            scene.idle(10)
            scene.world.setBlock([0, 1, 1], Block.id('biggerreactors:reactor_access_port', { 'portdirection': 'inlet' }), true)
            scene.world.setBlock([0, 1, 3], Block.id('biggerreactors:reactor_access_port', { 'portdirection': 'outlet' }), true)
            scene.idle(20)

            scene.addKeyframe()

            let outerWall = util.select.fromTo(0, 0, 0, 4, 4, 4).substract(util.select.fromTo(1, 1, 1, 3, 3, 3))
            scene.world.modifyBlocks(outerWall, (curState) => curState.with('assembled', true), false)
            scene.world.modifyBlock([0, 1, 3], () => Block.id('biggerreactors:reactor_access_port', { 'portdirection': 'outlet' }), false)
            scene.world.modifyBlocks([1, 0, 1, 3, 0, 3], () => Block.id('biggerreactors:reactor_casing', { 'assembled': true, 'x_axis': 'middle', 'z_axis': 'middle', 'y_axis': 'lower' }), false)
            scene.idle(20)
        })
})