import Arena from "./scenes/arena.js";
import LandingScreen from './scenes/LandingScreen.js'
import EndGameScreen from './scenes/EndGameScreen.js'
const config = {
  parent: "monitor",
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  input: {
    gamepad: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
      debug: true,
    },
  },
  scene: [
      LandingScreen,
      Arena,
      EndGameScreen
  ]

};

const game = new Phaser.Game(config);
