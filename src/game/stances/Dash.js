function Dash(stick) {
    this.setTexture("dash");
    this.body.moves = true
    console.log(stick.angle() * (180/Math.PI))
    this.setRotation(stick.angle())
    // this.setVelocity(stick.x )
}

export default Dash;