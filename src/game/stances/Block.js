function Block() {
    this.setTexture("block")
    this.setState('block')
    this.body.stop()
    this.body.moves = false
}

export default Block;