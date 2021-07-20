export default class EndGameScreen extends Phaser.Scene {
  constructor()
  {
    super({ key: 'EndGameScreen'})
  }
  init(data)
  {
    this.scores = data.scores
    this.playerNumber = data.playerNumber
  }
  preload()
  {
    this.load.scenePlugin('mergedInput', MergedInput);

  }
  create()
  {
    const text = this.add.text(240, 300, "Game Over!", { fontFamily: "Arial Black", fontSize: 82 });
    text.setStroke('#000000', 4);
    //  Apply the gradient fill.
    const gradient = text.context.createLinearGradient(0, 0, 0, text.height);
    gradient.addColorStop(0, '#111111');
    gradient.addColorStop(.5, '#ffffff');
    gradient.addColorStop(.5, '#aaaaaa');
    gradient.addColorStop(1, '#111111');
    text.setFill(gradient);
    for (let thisPlayer of this.mergedInput.players) {
      if (thisPlayer.buttons["B20"]){
      this.scene.start('LandingScreen')
      console.log(this.scores)
  }
  }

}