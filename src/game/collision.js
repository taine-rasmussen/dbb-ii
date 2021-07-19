import Phaser from 'phaser'
import Arena from './arena'
import scores from './arena'
import { player1Win, player2Win } from './winFunc'

function collision(player1, player2) {
  console.log(player1, player2)
  if (player1.state === 'dash' && player2.state === 'base') {
    // player2.active = false
    // player1.score++
    // player2.scene.scene.pause()
    // player1.setPosition(player1.start[0], player1.start[1])
    // player2.setPosition(player2.start[0], player2.start[1])
    // player2.scene.scene.resume()
    player1Win(player1, player2)
  } else if (player1.state === 'dash' && player2.state === 'ball') {
    // player2.active = false
    // player1.score++
    // player2.scene.scene.pause()
    // player1.setPosition(player1.start[0], player1.start[1])
    // player2.setPosition(player2.start[0], player2.start[1])
    // player2.scene.scene.resume()
    player1Win(player1, player2)
  } else if (player1.state === 'dash' && player2.state === 'block') {
    // player1.active = false
    // player2.score++
    // player1.scene.scene.pause()
    // player2.setPosition(player1.start[0], player1.start[1])
    // player1.setPosition(player2.start[0], player2.start[1])
    // player1.scene.scene.resume()
    player2Win(player1, player2)
  }  else if (player1.state === 'block' && player2.state === 'ball') {
    // player2.active = false
    // player1.score++
    // player2.scene.scene.pause()
    // player1.setPosition(player1.start[0], player1.start[1])
    // player2.setPosition(player2.start[0], player2.start[1])
    // player2.scene.scene.resume()
    player2Win(player1, player2)
  } else if (player1.state === 'block' && player2.state === 'dash') {
    // player2.active = false
    // player1.score++
    // player2.scene.scene.pause()
    // player1.setPosition(player1.start[0], player1.start[1])
    // player2.setPosition(player2.start[0], player2.start[1])
    // player2.scene.scene.resume()
    player1Win(player1, player2)
  } else if (player1.state === 'block' && player2.state === 'base') {
    // player2.active = false
    // player1.score++
    // player2.scene.scene.pause()
    // player1.setPosition(player1.start[0], player1.start[1])
    // player2.setPosition(player2.start[0], player2.start[1])
    // player2.scene.scene.resume()
    player1Win(player1, player2)
  } else if (player1.state === 'ball' && player2.state === 'dash') {
    // player2.active = false
    // player1.score++
    // player2.scene.scene.pause()
    // player1.setPosition(player1.start[0], player1.start[1])
    // player2.setPosition(player2.start[0], player2.start[1])
    // player2.scene.scene.resume()
    player2Win(player1, player2)
  } else if (player1.state === 'ball' && player2.state === 'block') {
    // player2.active = false
    // player1.score++
    // player2.scene.scene.pause()
    // player1.setPosition(player1.start[0], player1.start[1])
    // player2.setPosition(player2.start[0], player2.start[1])
    // player2.scene.scene.resume()
    player1Win(player1, player2)
  } else if (player1.state === 'ball' && player2.state === 'base') {
    // player2.active = false
    // player1.score++
    // player2.scene.scene.pause()
    // player1.setPosition(player1.start[0], player1.start[1])
    // player2.setPosition(player2.start[0], player2.start[1])
    // player2.scene.scene.resume()
    player1Win(player1, player2)
  }
}

export default collision


// block > dash > ball > block
// base can suck a fat one