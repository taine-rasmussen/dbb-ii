import {} from '../arena'


function Block(stick) {
    // this.setRotation(stick.angle())
    this.setTexture("block")
    this.setState('block')
    this.body.stop()
    this.body.moves = false
    this.sound.play('stop', { volume: 0.8 })
}

export default Block;