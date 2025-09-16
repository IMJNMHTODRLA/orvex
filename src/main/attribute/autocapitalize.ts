export function autocapitalize(
    obj: HTMLElement,
    val: string
) {
    if (
        val != "off" &&
        val != "none" &&
        val != "on" &&
        val != "sentences" &&
        val != "words" &&
        val != "characters"
    ) return
    obj.contentEditable = val
}