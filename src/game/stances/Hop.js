function Hop(stick) {
  if (this.state === 'base') {
    this.setRotation(stick.angle())
    this.body.setMaxSpeed(450)
    this.body.setVelocityY(-350)
    this.body.setVelocity(this.body.velocity.x * 1.3, this.body.velocity.y * 1.3)
    this.setState('jumped')

    //

}
}

export default Hop;