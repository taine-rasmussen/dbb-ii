import MergedInput from '../main.js'
export default class LandingScreen extends Phaser.Scene {

    
    constructor ()
    {
        super({ key: 'LandingScreen' });
    }
    preload ()
    {
        this.load.scenePlugin('mergedInput', MergedInput);
        this.load.image('button', './assets/select.png')
        this.load.image('bg', './assets/basic_sky.png')
        this.load.image('sun', './assets/sun_screenshot.PNG')
        this.load.image('dragon', './assets/dragon_screenshot.PNG')
        this.load.image('eye', './assets/eye_screenshot.PNG')

    }
    create()
    {
        const bg = this.add.image(0,0,'bg').setScale(2)
        const sunButton = this.add.image(200, 600, 'button').setInteractive().setScale(0.5);
        const dragonButton = this.add.image(600, 600, 'button').setInteractive().setScale(0.5);
        const eyeButton = this.add.image(1000, 600, 'button').setInteractive().setScale(0.5);
        sunButton.once('pointerup', this.startSunMap, this)
        dragonButton.once('pointerup', this.startDragonMap, this)
        eyeButton.once('pointerup', this.startEyeMap, this)
        const sunShot = this.add.image(200, 450, 'sun').setScale(0.3)
        const dragonShot = this.add.image(600, 450, 'dragon').setScale(0.3)
        const eyeShot = this.add.image(1000, 450, 'eye').setScale(0.3)
        }
        
    startEyeMap()
    {
        let playerNumber = this.mergedInput.players.length
        this.scene.start('Arena', { mapData: 'eye_background.json', tileData: "gridtiles.png", backgroundData:  "eye_background.png", numberOfPlayers: playerNumber })
    }
    startDragonMap()
    {
        let playerNumber = this.mergedInput.players.length
            this.scene.start('Arena', { mapData: 'dragon_background.json', tileData: "gridtiles.png", backgroundData:  "dragon_background.png", numberOfPlayers: playerNumber })    }
    startSunMap()
    {
        let playerNumber = this.mergedInput.players.length
            this.scene.start('Arena', { mapData: 'sun_map.json', tileData: "gridtiles.png", backgroundData:  "sun_background.png", numberOfPlayers: playerNumber })
    }
    update()    
    {
        this.mergedInput.players.forEach((player, i) => {
            this.add.text(200 * i, 100, `Hello player ${i + 1}`, { fontSize: 20, color: '#00ff00' })
        })
    }
} 
