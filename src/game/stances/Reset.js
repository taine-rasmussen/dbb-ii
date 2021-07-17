function Reset() {
  this.body.setMaxSpeed(400)
  this.body.moves = true
  this.setState('base')
  this.setTexture('player')
  // this.body.setSize()
}

export default Reset
