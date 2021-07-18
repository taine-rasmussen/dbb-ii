function Reset(accelerationX, LUBRICATION) {
  // this.body.setMaxSpeed(400)
  this.body.moves = true

  this.setState('base')
  this.setTexture('player')
  this.body.setBounce(0)
  // this.body.setAccelerationX(accelerationX * LUBRICATION)
  if (this.input) {
    this.setRotation(this.input.gamepad.leftStick.angle())
  } else {
    this.setRotation(0)
  }
  this.body.setSize(605, 580)
  this.setScale(0.1)
  this.body.setDrag(800, 0)
}

export default Reset
