export function mkobj(obj: string, text?: string, isFast: boolean = true) {
    const tag = document.createElement(obj)
    if (text != null) {
        if (tag.tagName.toLowerCase() == "input") {
            (tag as HTMLInputElement).value = text
        } else {
            tag.textContent = text
        }
    }

    if (isFast) document.body.appendChild(tag)
    return tag
}