function Ball(stick) {
    // this.setRotation(stick.angle())
    this.body.setMaxSpeed(850)
    this.setTexture("ball")
    this.setState('ball')
    this.body.setDrag(0, 0)
    this.body.setBounce(1.2)
    this.body.setCircle(280)
    //this.sound.play('battery', { volume: 0.8 })
}

export default Ball;