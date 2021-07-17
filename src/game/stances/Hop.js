function Hop() {
  if (this.state === 'base') {
    this.body.setMaxSpeed(400)
    this.body.setVelocityY(-350)
    this.body.setVelocity(this.body.velocity.x * 1.1, this.body.velocity.y * 1.3)
    this.setState('jumped')
}
}

export default Hop;