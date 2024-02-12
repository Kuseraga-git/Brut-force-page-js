import { hashDigit } from "./script.js";

export class Code {
    constructor () {
        this.digit1 = hashDigit(Math.floor(Math.random() * 10)),
        this.digit2 = hashDigit(Math.floor(Math.random() * 10)),
        this.digit3 = hashDigit(Math.floor(Math.random() * 10))
    }
}
