function Reset(accelerationX, LUBRICATION) {
  // this.body.setMaxSpeed(400)
  this.body.moves = true

  this.setState('base')
  this.setTexture('player')
  this.body.setBounce(0)
  this.body.setAccelerationX(accelerationX * LUBRICATION)
  // this.body.setSize()
}

export default Reset
