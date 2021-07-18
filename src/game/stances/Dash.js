function Dash(stick) {
    this.body.setMaxSpeed(800)
    this.setTexture("dash");
    this.sound.play('lazer', { volume: 0.8 })
    this.body.moves = true
    console.log(stick)
    this.setRotation(stick.angle())
    this.body.setVelocityX(stick.x * 800)
    this.body.setVelocityY(stick.y * 800)
}

export default Dash;