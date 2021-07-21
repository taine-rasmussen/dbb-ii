import MergedInput from '../main.js'
export default class LandingScreen extends Phaser.Scene {

  
  constructor ()
  {
    super({ key: 'LandingScreen' });
  }
  init()
  {
    this.sunMap = {
      mapData: 'sun_map.json', tileData: "gridtiles.png", backgroundData:  "sun_background.png", spawns: []
    }
    this.eyeMap = {
      mapData: 'eye_background.json', tileData: "gridtiles.png", backgroundData:  "eye_background.png", spawns: []
    }
    this.dragonMap = {
      mapData: 'dragon_background.json', tileData: 'gridtiles.png', backgroundData: 'dragon_background.png', spawns: []
    }
    this.playerNumber = 0
  }
  
  preload ()
  {
    this.load.scenePlugin('mergedInput', MergedInput);
    this.load.image('button', './assets/select.png')
    this.load.image('bg', './assets/basic_sky.png')
  }
  
  create()
  {
    // const text = this.add.text(240, 300, "Press A/X to Play!", { fontFamily: "Arial Black", fontSize: 82 });
    // text.setStroke('#000000', 4);
    // //  Apply the gradient fill.
    // const gradient = text.context.createLinearGradient(0, 0, 0, text.height);
    // gradient.addColorStop(0, '#111111');
    // gradient.addColorStop(.5, '#ffffff');
    // gradient.addColorStop(.5, '#aaaaaa');
    // gradient.addColorStop(1, '#111111');
    // text.setFill(gradient);
    const bg = this.add.image(0,0,'bg').setScale(2)
    const sunButton = this.add.image(200, 600, 'button').setInteractive().setScale(0.5);
    const dragonButton = this.add.image(600, 600, 'button').setInteractive().setScale(0.5);
    const eyeButton = this.add.image(1000, 600, 'button').setInteractive().setScale(0.5);
    sunButton.once('pointerup', this.startSunMap, this)
    dragonButton.once('pointerup', this.startDragonMap, this)
    eyeButton.once('pointerup', this.startEyeMap, this)
  }
  startEyeMap()
  {
    let playerNumber = this.mergedInput.players.length
    let eyeMap = [[100, 500], [1175, 550], [475, 600], [810, 600], [495, 450], [820, 450], [225, 150], [1070, 150], [480 ,50], [800, 50], [645, 50], [645, 500]] 
      this.scene.start('Arena', 
      {
        mapData: 'eye_background.json',
        tileData: "gridtiles.png", 
        backgroundData:  "eye_background.png", 
        numberOfPlayers: playerNumber,
        spawns:  eyeMap
      })
  }
  startDragonMap()
  {
    let playerNumber = this.mergedInput.players.length
    let drangonMap = [[80, 100], [350, 50], [622, 100], [945, 25], [1250, 25], [1185, 400], [945, 550], [722, 325], [530, 375], [200, 550]]
      this.scene.start('Arena', 
      { 
        mapData: 'dragon_background.json', 
        tileData: "gridtiles.png", 
        backgroundData:  
        "dragon_background.png",
        numberOfPlayers: playerNumber, 
        spawns:  drangonMap
      })
  }
  startSunMap()
  {
    let playerNumber = this.mergedInput.players.length
    let sunMap = [[115, 100], [495, 50], [293, 250], [602, 300], [470, 600], [90, 600], [800, 600], [1200, 600], [1100, 250]]
      this.scene.start('Arena', 
        { 
          mapData: 'sun_map.json', 
          tileData: "gridtiles.png", 
          backgroundData:  "sun_background.png", 
          numberOfPlayers: playerNumber, 
          spawns: sunMap 
        })
    }
    update()    
    {
        this.mergedInput.players.forEach((player, i) => {
            this.add.text(200 * (i + 1), 100, `Hello player ${i + 1}`, { fontSize: 20, color: '#00ff00' })
        })
    }
} 
