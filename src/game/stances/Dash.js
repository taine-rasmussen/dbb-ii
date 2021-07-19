function Dash(stick) {
    this.body.setMaxSpeed(800)
    this.setTexture("dash");
    this.body.moves = true
    this.setRotation(stick.angle())
    this.body.setVelocityX(stick.x * 800)
    this.body.setVelocityY(stick.y * 800)
}

export default Dash;