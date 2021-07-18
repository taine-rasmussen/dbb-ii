function Dash(stick, input) {
  if (this.state === 'base') {
    this.setTexture("dash");
    this.body.setMaxSpeed(800)
    this.body.moves = true
    this.body.setDrag(0, 0)
    this.setRotation(stick.angle())
    this.body.setVelocityX(stick.x * 800)
    this.body.setVelocityY(stick.y * 800)
    input.enabled = false
    this.setState('dash')
  }
}

export default Dash