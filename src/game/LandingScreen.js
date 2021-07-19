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

    update()    
    {
        let playerNumber = 0
        for (let thisPlayer of this.mergedInput.players){
            playerNumber++
            this.add.text(200 * playerNumber, 100, `Hello player ${playerNumber}`)
        }
        for (let thisPlayer of this.mergedInput.players) {
            if (thisPlayer.buttons["B0"]){
            this.scene.start('Arena', { map: 'tiler-initial-prac.json', players: playerNumber })
            console.log(playerNumber)
        }
    }
} 
}
