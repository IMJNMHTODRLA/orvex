export function dir(
    obj: HTMLElement,
    val: string
) {
    if (val != "ltr" && val != "rtl") return
    obj.dir = val
}
