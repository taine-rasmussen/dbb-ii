function Dash(stick) {
    // Phaser.Input.gamepad.setAxisThreshold(0.1)
    this.body.setMaxSpeed(800)
    this.setTexture("dash");
    this.body.moves = true
    // console.log(stick.angle() * (180/Math.PI))
    console.log(stick)
    this.setRotation(stick.angle())
    this.body.setVelocityX(stick.x * 800)
    this.body.setVelocityY(stick.y * 800)
    // this.setVelocity(stick.x )
}

export default Dash;