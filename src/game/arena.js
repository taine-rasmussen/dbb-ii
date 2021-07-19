import MergedInput from "../main";
import Fighter, { Stances } from "./Fighter";

export default class Arena extends Phaser.Scene {
  preload() {
    this.load.scenePlugin("mergedInput", MergedInput);
    this.load.multiatlas("gamepad", "assets/gamepad.json", "assets");
    this.load.image(Stances.IDLE, "assets/Player.png");
    this.load.image(Stances.BLOCK, "assets/Block.png");
    this.load.image(Stances.DASH, "assets/Dash.png");
    this.load.image(Stances.BALL, "assets/Ball.png");

    //Setup for loading the base tilemap and required tile images
    this.load.tilemapTiledJSON("tilemap", `assets/${this.mapData}`);
    this.load.image("base_tiles", `assets/${this.tileData}`);
    this.load.image("background_tiles", `assets/${this.backgroundData}`);
  }

  create() {
    //Setup for loading the base tilemap and required tile images
    const map = this.make.tilemap({ key: "tilemap" });

    const backgroundTileset = map.addTilesetImage(
      "sun_background",
      "background_tiles"
    );
    const backgroundLayer = map.createLayer(
      "backgroundLayer",
      backgroundTileset,
      0,
      0
    );
    const middleTileset = map.addTilesetImage("platforms_L1", "base_tiles");
    const middleLayer = map.createLayer("middleLayer", middleTileset, 0, 0);

    backgroundLayer.setScale(0.8);
    middleLayer.setScale(0.8);

    //smooth out fps
    // this.physics.world.syncToRender = true;
    this.physics.world.fixedStep = false;

    this.physics.world.setBounds(0, 0, 1280, 720);
    middleLayer.setCollisionByProperty({ collides: true });
    middleLayer.setCollisionByExclusion([-1]);

    // Set up player objects
    this.players = Array.from(new Array(this.numberOfPlayers)).map((_, i) =>
      this.mergedInput.addPlayer(i)
    );

    let playerGroup = this.add.group();
    this.starts = [
      [280, 600],
      [1000, 150],
      [500, 300],
      [400, 100],
    ];

    this.players.forEach((player, i) => {
      let [x, y] = this.starts[i];
      player.fighter = new Fighter(this, x, y);
      this.add.existing(player.fighter);
      this.physics.add.existing(player.fighter, false);
      this.physics.add.collider(middleLayer, player.fighter);

      player.fighter.score = 0;
      player.index = i;
      playerGroup.add(player.fighter);
    });

    // Define keys (player, action, key, append)
    this.mergedInput
      .defineKey(0, "UP", "W")
      .defineKey(0, "DOWN", "S")
      .defineKey(0, "LEFT", "A")
      .defineKey(0, "RIGHT", "D")

      .defineKey(1, "UP", "UP")
      .defineKey(1, "DOWN", "DOWN")
      .defineKey(1, "LEFT", "LEFT")
      .defineKey(1, "RIGHT", "RIGHT")

      .defineKey(0, "B0", "ONE")
      .defineKey(0, "B1", "TWO")
      .defineKey(0, "B2", "THREE")
      .defineKey(0, "B3", "FOUR")
      .defineKey(0, "B4", "FIVE")
      .defineKey(0, "B5", "SIX")
      .defineKey(0, "B6", "SEVEN")
      .defineKey(0, "B7", "EIGHT")
      .defineKey(0, "B8", "NINE")
      .defineKey(0, "B9", "ZERO")

      .defineKey(1, "B0", "NUMPAD_ONE")
      .defineKey(1, "B1", "NUMPAD_TWO")
      .defineKey(1, "B2", "NUMPAD_THREE")
      .defineKey(1, "B3", "NUMPAD_FOUR")
      .defineKey(1, "B4", "NUMPAD_FIVE")
      .defineKey(1, "B5", "NUMPAD_SIX")
      .defineKey(1, "B6", "NUMPAD_SEVEN")
      .defineKey(1, "B7", "NUMPAD_EIGHT")
      .defineKey(1, "B8", "NUMPAD_NINE")
      .defineKey(1, "B9", "NUMPAD_ZERO");

    // Set up collisions between players, pairwise
    // for (let { fighter } of this.players){
    //   fighter.body.setCollisionGroup(playerGroup)
    // }

    function rockPaperScissors(fighter1, fighter2) {
      // Dash > Idle
      if (fighter1.state === Stances.DASH && fighter2.state === Stances.IDLE) {
        handleWin(fighter1, fighter2);
      } else if (
        fighter1.state === Stances.DASH &&
        fighter2.state === Stances.BALL
      ) {
        handleWin(fighter1, fighter2);
      } else if (
        fighter1.state === Stances.DASH &&
        fighter2.state === Stances.BLOCK
      ) {
        handleWin(fighter1, fighter2);
        // Ball > Block
      } else if (
        fighter1.state === Stances.BLOCK &&
        fighter2.state === Stances.BALL
      ) {
        handleWin(fighter2, fighter1);
      } else if (
        fighter1.state === Stances.BLOCK &&
        fighter2.state === Stances.DASH
      ) {
        handleWin(fighter1, fighter2);
      } else if (
        fighter1.state === Stances.BLOCK &&
        fighter2.state === Stances.IDLE
      ) {
        handleWin(fighter1, fighter2);
      } else if (
        fighter1.state === Stances.BALL &&
        fighter2.state === Stances.DASH
      ) {
        handleWin(fighter1, fighter2);
      } else if (
        fighter1.state === Stances.BALL &&
        fighter2.state === Stances.BLOCK
      ) {
        handleWin(fighter1, fighter2);
      } else if (
        // Ball > Idle
        fighter1.state === Stances.BALL &&
        fighter2.state === Stances.IDLE
      ) {
        handleWin(fighter1, fighter2);
      }

      function handleWin(winner, loser) {
        winner.score += 1;
        console.log(winner.score);
        loser.setPosition(loser.spawn.x, loser.spawn.y);
      }
    }

    for (let a of this.players) {
      for (let b of this.players) {
        if (a.index != b.index) {
          this.physics.add.collider(a.fighter, b.fighter, rockPaperScissors);
        }
      }
    }

    // Set up some debug text

    this.debugTexts = [];
    this.scoreTexts = [];

    this.players.forEach((player, i) => {
      const spaceBetween = 50;
      this.debugTexts[i] = this.add.text(
        50 + i * spaceBetween,
        500 + i * spaceBetween,
        "",
        {
          fontFamily: "Arial",
          fontSize: 14,
          color: randomColor(), //'#00ff00'
        }
      );

      const scoreTextSpace = 1000;
      this.scoreTexts[i] = this.add.text(
        100 + scoreTextSpace * i,
        50,
        player.fighter.score,
        {
          fontFamily: "Arial",
          fontSize: 44,
          color: "white", //'#00ff00'
        }
      );

      // Used for distinguishing different controller texts
      // while debugging
      function randomColor() {
        let [r, g, b] = Array.from(new Array(3)).map(randomByte);
        return `rgb(${r}, ${g}, ${b})`;
        // *** helper ***
        function randomByte() {
          return Math.floor(Math.random() * 256);
        }
      }
    });
  }

  update() {
    // Loop through player inputs

    this.players.forEach((player, i) => {
      let { fighter } = player;
      fighter.update(player);
      this.scoreTexts[i].setText(player.fighter.score);
    });

    // this.debugTexts.forEach((text, i) => {
    //   text.setText([
    //     `Player ${i + 1}', 'Gamepad: ` +
    //       (typeof this.mergedInput.getPlayer(i).gamepad.index === "undefined"
    //         ? "Press a button to connect"
    //         : this.mergedInput.getPlayer(i).gamepad.id),
    //     "Directions: " +
    //       JSON.stringify(this.mergedInput.getPlayer(i).direction),
    //     "Buttons: " + JSON.stringify(this.mergedInput.getPlayer(i).buttons),
    //     "Interaction: " +
    //       JSON.stringify(this.mergedInput.getPlayer(i).interaction),
    //   ]);
    // });
  }
}
