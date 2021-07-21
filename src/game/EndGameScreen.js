import MergedInput from '../main.js'

export default class EndGameScreen extends Phaser.Scene {
  constructor()
  {
    super({ key: 'EndGameScreen'})
  }
  init(data)
  {
    this.scores = data.scores
    this.scoreColours =[`rgb(255, 0, 0)`, `rgb(0, 255, 0)`, `rgb(0, 0, 255)`, `rgb(255, 255, 0)`, `rgb(0, 255, 255)`]
  }
  preload()
  {
    this.load.scenePlugin('mergedInput', MergedInput);
    this.load.image('ebg', './assets/pheonix_background.png')
  }
  create()
  {
    var bg = this.add.image(640, 360, 'ebg')
    var text = this.add.text(350, 300, "Game Over!", { fontFamily: "Arial Black", fontSize: 82, color: '#111111'});
    text.setStroke('#000000', 4);
    //  Apply the gradient fill.
    const gradient = text.context.createLinearGradient(0, 0, 0, text.height);
    gradient.addColorStop(0, '#111111');
    gradient.addColorStop(.5, '#ffffff');
    gradient.addColorStop(.5, '#aaaaaa');
    gradient.addColorStop(1, '#111111');
    text.setFill(gradient);
    this.scores.forEach((x, i) => {
      this.add.text(220 * x.id, 100,
         `Player ${x.id}\n
${x.score} points`,
          { fontSize: 20, color: this.scoreColours[i] })
    })
}
}