import ScaleDownDestroy from 'phaser3-rex-plugins/plugins/scale-down-destroy.js'
import Phaser from 'phaser'
import Arena from './arena'

function collision(player1, player2) {
  console.log(player1.state, player2)
  if (player1.state === 'dash' && player2.state === 'base') {
    player2.active = false
    // player2.body.world.scaleDownDestroy(player2)
    // player2.body.world.scene.restart()
    // Arena.scene.scene.restart()
  }
}

export default collision


// block > dash > ball > block
// base can suck a fat one