function Hop(stick) {
  if (this.state === "base") {
    console.log(stick)
    // this.setRotation(stick.angle());
    this.body.setMaxSpeed(800);
    this.body.setDrag(0, 0)

    this.body.setVelocityY(stick.y * 10000)
    this.body.setVelocityX(stick.x * 10000);
    console.log("X: ", this.body.velocity.x);
    this.setState("jumped");
  }
}

export default Hop;
