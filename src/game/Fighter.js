import { Ball, Block, Dash, Idle, Hop } from "./stances/Stances";

const DEFAULT_SPEED = 150;
const PLAYER_DRAG_X = 800;
const ARENA_WIDTH = 1280; // this should not be hard coded here!
const ARENA_HEIGHT = 720; // neither should this!

// milliseconds between dash use
const DASH_COOLDOWN = 5000;

const HOP_SPEED = 1e4;
const DASH_SPEED = 800;

const ControlScheme = Object.freeze({
  HOP: "B1",
  DASH: "B8",
  BLOCK: "B5",
  BALL: "B3",
  dir: "AIM",
});

export const Stances = Object.freeze({
  DASH: "DASH",
  BLOCK: "BLOCK",
  BALL: "BALL",
  IDLE: "IDLE",
  JUMPED: "JUMPED",
});

export default class Fighter extends Phaser.GameObjects.Sprite {
  constructor(arena, x, y, controlScheme = ControlScheme) {
    // do what a sprite does with a scene,
    // except here we called it 'arena' instead.
    super(arena, x, y);

    // Ensure correct sprite size
    this.setScale(0.1);

    // Initialize fighter with default stance
    this.setStance(Stances.IDLE);

    // TODO: Get x, y values from tiled map
    this.setPosition(x, y);

    this.controlScheme = controlScheme;
  }

  update(input) {
    // Default physics properties
    this.body.setDrag(PLAYER_DRAG_X, 0);

    // Get inputs (this frame)
    let { direction, buttons } = input;
    let { UP, DOWN, LEFT, RIGHT } = direction;

    // Get movement direction from left stick
    let dx = Number(RIGHT) - Number(LEFT);
    let dy = Number(DOWN) - Number(UP);
    let angle = Math.atan2(dy, dx);

    // Handle button presses
    let { HOP, BALL, BLOCK, DASH } = this.controlScheme;
    if (buttons[HOP]) {
      Hop(this, dx * DEFAULT_SPEED, dy * HOP_SPEED);
    } else if (buttons[BALL]) {
      Ball(this, dx * DEFAULT_SPEED);
    } else if (buttons[BLOCK]) {
      Block(this);
      this.body.stop();
    } else if (buttons[DASH]) {
      Dash(this, dx * DASH_SPEED, dy * DASH_SPEED);
    } else {
      Idle(this, dx * DEFAULT_SPEED);
    }

    // All stance sprites face the direction
    // of the left thumbstick
    // this.updateHitbox();
    this.setRotation(angle);

    // When you get to the arena edge,
    // wrap back around.
    this.y = modulo(this.y, ARENA_HEIGHT);
    this.x = modulo(this.x, ARENA_WIDTH);
  }

  setStance(stanceName) {
    if (!Object.values(Stances).includes(stanceName)) {
      throw new Error(`Stance ${stanceName} must be a defined stance.`);
    }
    this.state = stanceName;
    this.setTexture(stanceName);
  }

  // updateHitbox updates the fighter's
  // hitbox based on its sprite width
  updateHitbox() {
    // Change the hitbox to a circle
    const halfWidth = this.width / 2;
    const shrinkHitboxByAmount = 40;
    const hitBoxRadius = halfWidth - shrinkHitboxByAmount;
    this.body.setCircle(hitBoxRadius);
  }
}

// *** HELPERS ***

function modulo(k, n) {
  return (n + (k % n)) % n;
}
