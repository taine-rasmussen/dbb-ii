const LUBRICATION = 50;


// const states = Object.freeze({
//   DASH: "DASH",
//   BLOCK: "BLOCK",
//   BALL: "BALL"
// });

// const States = 

export default class Fighter extends Phaser.GameObjects.Sprite {
  constructor(arena, x, y) {
    super(arena, x, y)
    this.setTexture('man')
    this.setPosition(x, y)
  }

  update({direction, buttons}) {

    let { UP, DOWN, LEFT, RIGHT } = direction;
    let ax = RIGHT - LEFT;
    let ay = DOWN - UP;
    this.body.acceleration.x = ax * LUBRICATION;
    this.body.acceleration.y = ay * LUBRICATION;

    const ball = () => {
      this.setTexture('Ball')
      this.setBounce(1)
      setTimeout(1000)
    }
  //   // if the player presses A:
  //   if (buttons["B0"]) {
  //     this._nextState();
  //   }

  // // _underscore denotes private methods, not called by Scene
  // function _nextState() {
  //   this.stateIndex = (this.stateIndex + 1) % states.length;
  //   this.state = states[this.stateIndex]
  // }

  //   if (direction.UP > 0) {
  //     this.body.setVelocityX();
  // }
  // if (direction.RIGHT > 0) {
  //     this.x += PLAYER_SPEED;
  // }
  // if (direction.DOWN > 0) {
  //     this.y += PLAYER_SPEED;
  // }
  // if (direction.LEFT > 0) {
  //     this.x -= PLAYER_SPEED;
  // }
  // }
  }
}
