export function mkobj(obj: string, text?: string, isFast: boolean = true) {
    const tag = document.createElement(obj)
    if (text != null) tag.textContent = text

    if (isFast) document.body.appendChild(tag)
    return tag
}