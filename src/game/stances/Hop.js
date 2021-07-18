import { Stances } from "../fighter";

const HOP_SPEED = 10000;
const HOPPER_MAX_SPEED = 800;
// const JUMP_COOLDOWN = 3000;

function Hop(angle, x, y) {
    if (this.state == Stances.BASE) {
    this.setRotation(angle);
    this.body.setMaxSpeed(HOPPER_MAX_SPEED);
    this.body.setDrag(0, 0)

    this.body.setVelocityY(y * HOP_SPEED)
    this.body.setVelocityX(x * HOP_SPEED);
    console.log("X: ", this.body.velocity.x);
    this.setState("jumped")
  }
}

export default Hop;
