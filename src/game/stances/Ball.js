function Ball() {
  this.body.setMaxSpeed(500)
    this.setTexture("ball")
    this.setState('ball')
    this.body.setBounce(1, 10)
    this.body.setDrag(0, 0)
    
    // this.body.moves = false
}

export default Ball;