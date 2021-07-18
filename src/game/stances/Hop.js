function Hop(stick, accelerationX, accelerationY, LUBRICATION) {
  if (this.state === "base") {
    this.setRotation(stick.angle());
    this.body.setMaxSpeed(600);

    if (accelerationY > 0 && accelerationX < 0) {
      //down && left
      this.body.setAccelerationY(350);
      this.body.setAccelerationX(-20000);
      console.log("down and left");
    }
    if (accelerationY > 0 && accelerationX > 0) {
      //down && right
      this.body.setAccelerationY(350);
      this.body.setAccelerationX(20000);
      console.log("down and right");
    }
    if (accelerationY < 0 && accelerationX < 0) {
      //up && left
      this.body.setAccelerationY(350);
      this.body.setAccelerationX(-20000);
      console.log("up and left");
    }
    if (accelerationY < 0 && accelerationX > 0) {
      //up && right
      this.body.setAccelerationY(-350);
      this.body.setAccelerationX(20000);
      console.log("up and right");
    }
    if (accelerationX == -1 && accelerationY == 0) {
      this.body.setAccelerationX(-20000);
      console.log("left only")
    }
    if (accelerationX == 1 && accelerationY == 0) {
      this.body.setAccelerationX(20000);
      console.log("right only")
    }

    this.body.setVelocityY(accelerationY * 1000);
    this.body.setVelocityX(accelerationX * 1000);

    // this.body.setAcceleration(accelerationX * 10000, accelerationY * 10000)
    // this.body.setAccelerationY(accelerationY * 100)
    // this.body.setAccelerationX(accelerationX * 10000);
    console.log("X: ", accelerationX);
    console.log("Y: ", accelerationY);
    this.setState("jumped");


    //
  }
}

export default Hop;
