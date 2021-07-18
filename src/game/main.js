import Arena from './arena.js';

function DefineArena(mapData, numberOfPlayers) {
    class CustomArena extends Arena {
        init() {
            this.mapData = mapData;
            this.numberOfPlayers = numberOfPlayers;
        }
    }
    return CustomArena
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
	input: {
		gamepad: true
	},
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 1000 },
            debug: true,
        }
    },
    scene: [
       DefineArena(null, 3)
    ]
};

const game = new Phaser.Game(config);


