function Dash(stick, input) {
  if (this.state === 'base') {
    this.setTexture("dash");
    this.body.setMaxSpeed(800)
    this.body.moves = true
    this.body.setDrag(0, 0)
    // this.setRotation(stick.angle())
    // this.body.setVelocityX(stick.x * 800)
    // this.body.setVelocityY(stick.y * 800)
    // input.enabled = false666d6ada
    this.setState('dash')
    //this.sound.play('lazer', { volume: 0.8 })
  }
}

export default Dash