export function contenteditable(
    obj: HTMLElement,
    val: string
) {
    if (val != "true" && val != "false" && val != "inherit") return
    obj.contentEditable = val
}