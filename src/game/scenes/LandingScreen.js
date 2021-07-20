import MergedInput from '../../main.js'
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
        const text = this.add.text(240, 300, "Press A/X to Play!", { fontFamily: "Arial Black", fontSize: 82 });
        text.setStroke('#000000', 4);
        //  Apply the gradient fill.
        const gradient = text.context.createLinearGradient(0, 0, 0, text.height);
        gradient.addColorStop(0, '#111111');
        gradient.addColorStop(.5, '#ffffff');
        gradient.addColorStop(.5, '#aaaaaa');
        gradient.addColorStop(1, '#111111');
        text.setFill(gradient);
    }
    update()    
    {
        let playerNumber = 0
        for (let thisPlayer of this.mergedInput.players){
            playerNumber++
            this.add.text(200 * playerNumber, 100, `Hello player ${playerNumber}`, { fontSize: 20, color: '#00ff00' })
        }
        for (let thisPlayer of this.mergedInput.players) {
            if (thisPlayer.buttons["B0"]){
            this.scene.start('Arena', { mapData: 'sun_map.json', tileData: "gridtiles.png", backgroundData:  "sun_background.png", numberOfPlayers: playerNumber })
            console.log(playerNumber)
        }
    }
} 
}