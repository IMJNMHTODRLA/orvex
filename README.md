# orvex
### Version 1.0.0

---

## Update

- first version

---

## install
```bash
$ npm install orvex
```

---

## using:

#### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="module" src="app.js"></script>
</body>
</html>
```

#### app.js

```js
import * as orvex from "orvex"

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
```
