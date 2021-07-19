function Hop(stick) {
  if (this.state === "base") {
    this.body.setMaxSpeed(800);
    this.body.setDrag(0, 0)
    this.body.setVelocityY(stick.y * 10000)
    this.body.setVelocityX(stick.x * 10000);
    this.setState("jumped");
  }
}

export default Hop;
