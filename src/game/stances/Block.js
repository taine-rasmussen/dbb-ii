function Block(stick) {
    this.setRotation(stick.angle())
    this.setTexture("block")
    this.setState('block')
    this.body.stop()
    // this.body.moves = false
    this.body.setAllowGravity(false)
}

export default Block;