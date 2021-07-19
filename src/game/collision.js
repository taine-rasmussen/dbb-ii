import Phaser from 'phaser'
import Arena from './arena'
import scores from './arena'

function collision(player1, player2) {
  console.log(player1, player2)
  if (player1.state === 'dash' && player2.state === 'base') {
    player2.active = false
    player1.score++
    player2.scene.scene.pause()
    player1.setPosition(player1.start[0], player1.start[1])
    player2.setPosition(player2.start[0], player2.start[1])
    player2.scene.scene.resume()
  }
}

export default collision


// block > dash > ball > block
// base can suck a fat one