import MergedInput from '../../main.js'

export default class EndGameScreen extends Phaser.Scene {
  constructor()
  {
    super({ key: 'EndGameScreen'})
  }
  init(data)
  {
    this.scores = data.scores
  }
  preload()
  {
    this.load.scenePlugin('mergedInput', MergedInput);

  }
  create()
  {
    var text = this.add.text(240, 300, "Game Over!", { fontFamily: "Arial Black", fontSize: 82, color: '#111111'});
    text.setStroke('#000000', 4);
    //  Apply the gradient fill.
    const gradient = text.context.createLinearGradient(0, 0, 0, text.height);
    gradient.addColorStop(0, '#111111');
    gradient.addColorStop(.5, '#ffffff');
    gradient.addColorStop(.5, '#aaaaaa');
    gradient.addColorStop(1, '#111111');
    text.setFill(gradient);
    this.scores.forEach(x => {
      this.add.text(300 * x.id, 100 * x.id,
         `Game over player ${x.id}\n
          You ended the game with ${x.score} points`,
          { fontFamily: "Arial Black", fontSize: 20 })
    })
    for (let thisPlayer of this.mergedInput.players) {
      if (thisPlayer.buttons["B20"]){
      this.scene.start('LandingScreen')
      }
  } 
}
}
