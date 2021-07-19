import Arena from "./arena.js";

function DefineArena(mapData, tileData, backgroundData, numberOfPlayers) {
  class CustomArena extends Arena {
    init() {
      this.mapData = mapData;
      this.numberOfPlayers = numberOfPlayers;
      this.tileData = tileData;
      this.backgroundData = backgroundData;
    }
  }
  return CustomArena;
}

const SunArena = DefineArena(
  "sun_map.json",
  "gridtiles.png",
  "sun_background.png",
  4
);

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
      debug: false,
    },
  },
  scene: SunArena,
};

const game = new Phaser.Game(config);
