import MergedInput from '../main.js'
export default class LandingScreen extends Phaser.Scene {

    
    constructor ()
    {
        super({ key: 'LandingScreen' });
    }

    preload ()
    {
        this.load.scenePlugin('mergedInput', MergedInput);
    }

    create()
    {
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
    }
    update()    
    {
        let playerNumber = 0
        for (let thisPlayer of this.mergedInput.players){
            this.add.text(100, 100, 'Hello')
            playerNumber++
            if (thisPlayer.buttons["B0"]){
                this.scene.switch('Arena', { map: 'tiler-initial-prac.json', players: playerNumber })
            }
        }
    }
}
