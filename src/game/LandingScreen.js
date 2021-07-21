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
        this.load.image('bg', './assets/start_screen.png')
        this.load.image('sun', './assets/sun_screenshot.PNG')
        this.load.image('dragon', './assets/dragon_screenshot.PNG')
        this.load.image('eye', './assets/eye_screenshot.PNG')
        this.loadFont('Ruslan', './assets/RuslanDisplay-Regular.ttf')
    }
    create()
    {
        const bg = this.add.image(640, 360, 'bg').setScale(0.8)
        const sunShot = this.add.image(310, 565, 'sun').setInteractive().setScale(0.3)
        const dragonShot = this.add.image(645, 565, 'dragon').setInteractive().setScale(0.3)
        const eyeShot = this.add.image(970, 565, 'eye').setInteractive().setScale(0.3)
        sunShot.once('pointerup', this.startSunMap, this)
        dragonShot.once('pointerup', this.startDragonMap, this)
        eyeShot.once('pointerup', this.startEyeMap, this)
        const pickAMap = this.add.text(390, 400, 'Click a map to play!', {
            fontFamily: 'Ruslan', 
            fontSize: 40
        }).setShadow(2, 2, "#333333", 2, false, true);
    }   
    startEyeMap()
    {
        // let playerNumber = this.mergedInput.players.length
        let playerNumber = 2
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
            this.add.text(200 * i + 100, 100, `Player ${i + 1} joined!`, { fontSize: 20, color: '#00ff00' })
        })
    }
    loadFont(name, url) {
        var newFont = new FontFace(name, `url(${url})`);
        newFont.load().then(function (loaded) {
            document.fonts.add(loaded);
        }).catch(function (error) {
            return error;
        });
      }
    
} 
