import Dash from "./stances/Dash"
import Block from "./stances/Block"
import Ball from "./stances/Ball"
import Reset from './stances/Reset'
import Hop from './stances/Hop'

const LUBRICATION = 150;

const ControlScheme = Object.freeze({
  // Flappy-bird-esque jumping
  ACTION_FLAP: "B0",
  STANCE_DASH: "B5",
  STANCE_BLOCK: "B4",
  STANCE_BALL: "B2",
  dir: 'AIM'
})

export const Stances = Object.freeze({
  DASH: "DASH",
  BLOCK: "BLOCK",
  BALL: "BALL",
  BASE: 'BASE'
});

// const States = 

export default class Fighter extends Phaser.GameObjects.Sprite {
  constructor(arena, x, y, controlScheme = ControlScheme) {
    super(arena, x, y)
    this.sprite = "player"
    this.setScale(0.1);
    this.setTexture(this.sprite)
    this.setPosition(x, y)
    this.controlScheme = controlScheme
  }

  update(input) {
    let {direction, buttons, axe} = input;
    let { UP, DOWN, LEFT, RIGHT, AIM } = direction;
    let accelerationX = RIGHT - LEFT;
    let accelerationY = DOWN - UP;
    this.body.velocity.x = accelerationX * LUBRICATION;
    // this.body.acceleration.y = accelerationY * LUBRICATION;
    this.body.setDrag(800, 0)
    // console.log(input.gamepad.leftStick)
    
    // if the player presses A:
    if (buttons[this.controlScheme.ACTION_FLAP]) {
      Hop.bind(this)(input.gamepad.leftStick, accelerationX, accelerationY, LUBRICATION)
    } else if  (buttons[this.controlScheme.STANCE_BALL]) {
      this.body.setCircle((this.width / 2) - 40)
      Ball.bind(this)(input.gamepad.leftStick);
    } else if (buttons[this.controlScheme.STANCE_BLOCK]) {
      Block.bind(this)(input.gamepad.leftStick);
    } else if (buttons[this.controlScheme.STANCE_DASH]) {
      Dash.bind(this)(input.gamepad.leftStick);
    } else {
      Reset.bind(this)(accelerationX, LUBRICATION)
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

