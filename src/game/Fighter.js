import Dash from "./stances/Dash"
import Block from "./stances/Block"
import Ball from "./stances/Ball"
import Reset from './stances/Reset'
import Hop from './stances/Hop'

const LUBRICATION = 150;

const ControlScheme = Object.freeze({
  // Flappy-bird-esque jumping
  HOP: "B0",
  DASH: "B5",
  BLOCK: "B4",
  BALL: "B2",
  dir: 'AIM'
})

export const Stances = Object.freeze({
  DASH: "DASH",
  BLOCK: "BLOCK",
  BALL: "BALL",
  BASE: 'BASE'
});

export default class Fighter extends Phaser.GameObjects.Sprite {
  constructor(arena, x, y, controlScheme = ControlScheme) {
    super(arena, x, y)
    this.sprite = "player"
    this.setScale(0.1);
    this.setTexture(this.sprite)
    this.setPosition(x, y)
    this.controlScheme = controlScheme
    this.canJump = true;
  }

  update(input) {
    let {direction, buttons, gamepad } = input;
    let { UP, DOWN, LEFT, RIGHT} = direction;
    let joystickX = RIGHT - LEFT;
    let joystickY = DOWN - UP;
    this.body.velocity.x = joystickX * LUBRICATION;
    this.body.setDrag(800, 0)

    let { HOP, BALL, BLOCK, DASH } = this.controlScheme;
    let angle = Math.atan2(joystickY, joystickX);
    // let angle = input.gamepad.leftStick.angle() || "Doesn't exist!"
    console.log(Object.keys(input))

    if (buttons[HOP]) {
      Hop.bind(this)(angle, joystickX, joystickY)
    } else if  (buttons[BALL]) {
      this.body.setCircle((this.width / 2) - 40)
      Ball.bind(this)(angle, joystickX, joystickY);
    } else if (buttons[BLOCK]) {
      Block.bind(this)(angle, joystickX, joystickY);
    } else if (buttons[DASH]) {
      Dash.bind(this)(angle, joystickX, joystickY);
      setTimeout(() => Reset.call(this), 1000)
    } else {
      Reset.bind(this)(joystickX, LUBRICATION, input.gamepad.leftStick)
    }
    
    if (this.y > 720) {
      this.y = -32
    }
    if (this.y < -32) {
      this.y = 730
    }
    
    if (this.x < 0) {
      this.x = 1279
    }
    if (this.x > 1284) {
      this.x = 1
    }
  }
}

