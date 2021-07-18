function Ball(stick) {
    this.setRotation(stick.angle())
    this.body.setMaxSpeed(600)
    this.setTexture("ball")
    this.setState('ball')
    this.body.setBounce(15)
    this.body.setDrag(0, 0)

    this.body.gravity.y = 1.5;
    this.body.gravity.x = 1.5;
    
    // this.body.mass(100)
    this.body.setCircle(280)
    this.body.setVelocity(this.body.velocity.x * 1.2, this.body.velocity.y * 1.2)

    // console.log('Velocity x', this.body.velocity.x)

    
    // this.body.moves = false
}

export default Ball;