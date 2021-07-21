import Phaser from 'phaser'
import Arena from './arena'
import scores from './arena'
import { player1Win, player2Win } from './winFunc'

function collision(player1, player2) {
  console.log(player1, player2)
  if (player1.state === 'dash' && player2.state === 'base') {
    this.scene.sound.play('lazer', { volume: 0.8 })
    player1Win(player1, player2)
  } else if (player1.state === 'dash' && player2.state === 'ball') {
    this.scene.sound.play('lazer', { volume: 0.8 })
    player1Win(player1, player2)
  } else if (player1.state === 'dash' && player2.state === 'block') {
    this.scene.sound.play('lazer', { volume: 0.8 })
    player2Win(player1, player2)
  }  else if (player1.state === 'block' && player2.state === 'ball') {
    this.scene.sound.play('stop', { volume: 0.8 })
    player2Win(player1, player2)
  } else if (player1.state === 'block' && player2.state === 'dash') {
    this.scene.sound.play('stop', { volume: 0.8 })
    player1Win(player1, player2)
  } else if (player1.state === 'block' && player2.state === 'base') {
    this.scene.sound.play('stop', { volume: 0.8 })
    player1Win(player1, player2)
  } else if (player1.state === 'ball' && player2.state === 'dash') {
    this.scene.sound.play('battery', { volume: 0.8 })
    player2Win(player1, player2)
  } else if (player1.state === 'ball' && player2.state === 'block') {
    this.scene.sound.play('battery', { volume: 0.8 })
    player1Win(player1, player2)
  } else if (player1.state === 'ball' && player2.state === 'base') {
    this.scene.sound.play('battery', { volume: 0.8 })
    player1Win(player1, player2)
  }
}

export default collision

