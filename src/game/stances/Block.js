import { Stances } from "../fighter";

function Block(gamepad) {
    let angle = gamepad.leftStick.angle();
    this.setRotation(angle)
    this.setTexture("block")
    this.setState(Stances.BLOCK)
    this.body.stop()
    this.body.moves = false
}


export default Block;