export default class Fighter extends Phaser.GameObjects.Sprite {
  constructor(arena, x, y) {
    super(arena, x, y)

    this.setTexture('man')
    this.setPosition(x, y)
  }
  update() {

  }
}
