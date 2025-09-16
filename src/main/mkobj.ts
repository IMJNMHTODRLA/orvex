export function mkobj(obj: string, text?: string, isFast: boolean = true) {
    const tag = document.createElement(obj)
    if (text != null) {
        const tagName = tag.tagName.toLowerCase()

        if (tagName == "input") (tag as HTMLInputElement).value = text
        else if (tagName == "textarea") (tag as HTMLTextAreaElement).value = text
        else if (tagName == "button") (tag as HTMLButtonElement).value = text

        else tag.textContent = text
    }

    if (isFast) document.body.appendChild(tag)
    return tag
}