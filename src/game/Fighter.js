import Dash from "./stances/Dash"
import Block from "./stances/Block"
import Ball from "./stances/Ball"
import Reset from './stances/Reset'
import Hop from './stances/Hop'
import Phaser from "phaser"


const LUBRICATION = 150;

const ControlScheme = Object.freeze({
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
export default class Fighter extends Phaser.GameObjects.Sprite {
  constructor(arena, x, y, controlScheme = ControlScheme) {
    super(arena, x, y)
    this.sprite = "player"
    this.setScale(0.1);
    this.setTexture(this.sprite)
    this.setPosition(x, y)
    this.controlScheme = controlScheme
  }

  update(input, all) {
    let {direction, buttons} = all[this.index];
    // let gamepad = input.gamepad
    let gamepad = all[this.index].gamepad
    let { UP, DOWN, LEFT, RIGHT} = direction;
    let accelerationX = RIGHT - LEFT;
    let accelerationY = DOWN - UP;
    let vec = new Phaser.Math.Vector2({ x: accelerationX, y: accelerationY })
    let stick = gamepad.leftStick
    this.body.velocity.x = accelerationX * LUBRICATION;
    this.body.setDrag(400, 0)
    // if (!gamepad.leftStick) {
    // //   buttons = all[this.index].keys
    //   console.log('kb')
    // }

    if (buttons[this.controlScheme.ACTION_FLAP]) {
      console.log(all)
      Hop.bind(this)(stick = vec)
    } else if  (buttons[this.controlScheme.STANCE_BALL]) {
      this.body.setCircle((this.width / 2) - 40)
      Ball.bind(this)(stick = vec);
    } else if (buttons[this.controlScheme.STANCE_BLOCK]) {
      Block.bind(this)(stick = vec);
    } else if (buttons[this.controlScheme.STANCE_DASH]) {
      Dash.bind(this)(stick = vec, input);
    } else {
      Reset.bind(this)(accelerationX, LUBRICATION, stick = vec)
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
