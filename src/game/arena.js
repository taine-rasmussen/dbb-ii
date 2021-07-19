import { Data } from "phaser";
import MergedInput from "../main";
import Fighter from './Fighter'
export default class Arena extends Phaser.Scene {
    constructor()
    {
        super({ key: "Arena" })
    }

    init(data)
    {
        console.log('init', data)
        this.mapData = data.map
        this.numberOfPlayers = data.players
    }

    preload() {
        this.load.scenePlugin('mergedInput', MergedInput);
		// this.load.multiatlas('gamepad', 'assets/gamepad.json', 'assets');
        this.load.image('player', 'assets/Player.png')
        this.load.image('block', 'assets/Block.png')
        this.load.image('dash', 'assets/Dash.png')
        this.load.image('ball', 'assets/Ball.png')

        //Setup for loading the base tilemap and required tile images
        this.load.image('base_tiles', 'assets/triangle.png')
        this.load.tilemapTiledJSON('tilemap', `assets/${this.mapData}`)
    }

    create() {

        // this.input.once('pointerdown', function (event) {

        //     this.scene.start('LandingScreen');

        // }, this);

        //Setup for loading the base tilemap and required tile images
        const map = this.make.tilemap({ key: 'tilemap' })
        const tileset = map.addTilesetImage('Triangle', 'base_tiles')
        // create the layers we want in the right order
	    const backgroundLayer = map.createLayer('Tile Layer 1', tileset, 0, 0)
        const middleLayer = map.createLayer('Tile Layer 2', tileset, 0, 0)
        backgroundLayer.setScale(0.8)
        middleLayer.setScale(0.8)

        //smooth out fps
        // this.physics.world.syncToRender = true;
        this.physics.world.fixedStep = false;
        // this.physics.world.fixedDelta = true;

        this.physics.world.setBounds(0, 0, 1280, 720)
        
        middleLayer.setCollisionByProperty({ collides: true });

        middleLayer.setCollisionByExclusion([-1]);
        

        // Set up player objects
        this.players = Array.from(new Array(this.numberOfPlayers)).map((_, i) => this.mergedInput.addPlayer(i))
        console.dir(this.players)


        this.players.forEach((player, i) => {
            player.fighter = new Fighter(this, 400, 400);
            this.add.existing(player.fighter);
            this.physics.add.existing(player.fighter, false);
            this.physics.add.collider(middleLayer, player.fighter);
            });



        // Define keys (player, action, key, append)
		this.mergedInput
			.defineKey(0, 'UP', 'W')
			.defineKey(0, 'DOWN', 'S')
			.defineKey(0, 'LEFT', 'A')
            .defineKey(0, 'RIGHT', 'D')

            .defineKey(1, 'UP', 'UP')
            .defineKey(1, 'DOWN', 'DOWN')
            .defineKey(1, 'LEFT', 'LEFT')
            .defineKey(1, 'RIGHT', 'RIGHT')

            .defineKey(0, 'B0', 'ONE')
            .defineKey(0, 'B1', 'TWO')
            .defineKey(0, 'B2', 'THREE')
            .defineKey(0, 'B3', 'FOUR')
            .defineKey(0, 'B4', 'FIVE')
            .defineKey(0, 'B5', 'SIX')
            .defineKey(0, 'B6', 'SEVEN')
            .defineKey(0, 'B7', 'EIGHT')
            .defineKey(0, 'B8', 'NINE')
            .defineKey(0, 'B9', 'ZERO')

            .defineKey(1, 'B0', 'NUMPAD_ONE')
            .defineKey(1, 'B1', 'NUMPAD_TWO')
            .defineKey(1, 'B2', 'NUMPAD_THREE')
            .defineKey(1, 'B3', 'NUMPAD_FOUR')
            .defineKey(1, 'B4', 'NUMPAD_FIVE')
            .defineKey(1, 'B5', 'NUMPAD_SIX')
            .defineKey(1, 'B6', 'NUMPAD_SEVEN')
            .defineKey(1, 'B7', 'NUMPAD_EIGHT')
            .defineKey(1, 'B8', 'NUMPAD_NINE')
            .defineKey(1, 'B9', 'NUMPAD_ZERO')
            ;

        // Set up some debug text
        console.log(this.players)
        this.playerTexts = []

        this.players.forEach((_, i) => {
            const spaceBetween = 50;
            this.playerTexts[i] = this.add.text(50 + i * spaceBetween, 500 + i * spaceBetween, '', {
                fontFamily: 'Arial',
                fontSize: 14,
                color: randomColor(),//'#00ff00'
            });

            // Used for distinguishing different controller texts
            // while debugging
            function randomColor() {
                let [r, g, b] = Array.from(new Array(3)).map(randomByte);
                return `rgb(${r}, ${g}, ${b})`
                // *** helper ***
                function randomByte() {
                    return Math.floor(Math.random() * 256);
                }
            }
        })

        // Instructions
        this.instructions1 = this.add.text(50, 20, ['Directions: WASD', 'Buttons: 1-0'], {
            fontFamily: 'Arial',
            fontSize: 14,
            color: '#00ff00'
        });
        this.instructions1 = this.add.text(740, 20, ['Directions: Cursors', 'Buttons: Numpad 1-0'], {
            fontFamily: 'Arial',
            fontSize: 14,
            color: '#00ff00'
        });
    }

    update() {

        // Loop through player inputs
        for (let thisPlayer of this.mergedInput.players) {
            let { fighter } = thisPlayer;
            if (typeof fighter !== "undefined"){
            fighter.update(thisPlayer)
            }
        }
    }
}