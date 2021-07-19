const player1Win = (player1, player2) => {
    player2.active = false
    player1.score++
    player2.scene.scene.pause()
    player1.setPosition(player1.start[0], player1.start[1])
    player2.setPosition(player2.start[0], player2.start[1])
    player2.scene.scene.resume()
}

const player2Win = (player1, player2) => {
    player1.active = false
    player2.score++
    player1.scene.scene.pause()
    player2.setPosition(player1.start[0], player1.start[1])
    player1.setPosition(player2.start[0], player2.start[1])
    player1.scene.scene.resume()
}

module.exports = {
  player1Win,
  player2Win
}