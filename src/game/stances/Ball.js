import { Stances } from "../fighter";

const BALL_MAX_SPEED = 850;
const BALL_CIRCLE = 280; // what is this?... collision circle radius?
const BALL_BOUNCE = 1.2;

function Ball(angle) {
    this.setRotation(angle)
    this.body.setMaxSpeed(BALL_MAX_SPEED)
    this.setTexture("ball")
    this.setState(Stances.BALL);
    this.body.setDrag(0, 0)
    
    this.body.setBounce(BALL_BOUNCE)
    this.body.setCircle(280)
}

export default Ball;