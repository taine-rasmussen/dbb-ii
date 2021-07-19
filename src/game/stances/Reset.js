function Reset(accelerationX, LUBRICATION, stick) {
  if (this.state === 'dash') {
    // this.setRotation(stick.angle())
    // this.body.setVelocityX(stick.x * 800)
    // this.body.setVelocityY(stick.y * 800)
    setTimeout(() => {
      this.body.moves = true
      this.setState('base')
      this.setTexture('player')
      this.body.setBounce(0)
      this.body.setSize(605, 580)
      this.setScale(0.1)
    }, 500)
  } else {
    this.body.moves = true
    this.setState('base')
    this.setTexture('player')
    this.body.setBounce(0)
    this.body.setSize(605, 580)
    this.setScale(0.1)
    this.body.setDrag(400, 0)
  }
}

export default Reset
