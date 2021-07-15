import MergedInput from "../main";

export default class Arena extends Phaser.Scene {


    preload() {
        this.load.scenePlugin('mergedInput', MergedInput);
		this.load.multiatlas('gamepad', 'assets/gamepad.json', 'assets');
    }

    create() {
        // Set up player objects
        this.players = Array.from(new Array(this.numberOfPlayers)).map((_, i) => this.mergedInput.addPlayer(i))
        console.dir(this.players)

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

        // Loop through player object
        for (let thisPlayer of this.mergedInput.players) {

            // Show dpad frame for direction input. (Diagonal input is supported, but can't easily be shown with these sprites)
            if (thisPlayer.direction.UP > 0) {
                // TODO: move player up
            }
            if (thisPlayer.direction.RIGHT > 0) {
                // TODO: move player right
            }
            if (thisPlayer.direction.DOWN > 0) {
                // TODO: move player down
            }
            if (thisPlayer.direction.LEFT > 0) {
                // TODO: move player left
            }

            for (let thisButton in thisPlayer.buttons) {
                // do player actions
                // (shape cycling etc.)
            }
        }

        this.playerTexts.forEach((text, i) => {
            text.setText([
                `Player ${i + 1}', 'Gamepad: ` + (typeof this.mergedInput.getPlayer(i).gamepad.index === 'undefined' ? 'Press a button to connect' : this.mergedInput.getPlayer(i).gamepad.id),
                'Directions: ' + JSON.stringify(this.mergedInput.getPlayer(i).direction),
                'Buttons: ' + JSON.stringify(this.mergedInput.getPlayer(i).buttons),
                'Interaction: ' + JSON.stringify(this.mergedInput.getPlayer(i).interaction)
            ])
        })

        // this.player2Text.setText(JSON.stringify(this.mergedInput.debug().players, null, "\t"));

    }
}