import * as orvex from "../../dist/load.js"

let count = 0

const h1 = orvex.mkobj("h1", `Your count: ${count}`)
const upButton = orvex.mkobj("button", "increase")
const downButton = orvex.mkobj("button", "decrease")

orvex.event(upButton, (e) => {
    if (e.shiftKey) count += 10
    else count++

    if (count > 255) {
        alert("It cannot go above 255.")
        count = 255
    }
    orvex.text(h1, `Your count: ${count}`)
}, "click")

orvex.event(downButton, (e) => {
    if (e.shiftKey) count -= 10
    else count--

    if (count < 0) {
        alert("It cannot go below 0.")
        count = 0
    }
    orvex.text(h1, `Your count: ${count}`)
}, "click")
