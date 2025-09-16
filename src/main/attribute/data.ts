export function data(
    obj: HTMLElement,
    key: string,
    val: string
) {
    obj.dataset[key] = val
}

export function getdata(
    obj: HTMLElement,
    key: string
) {
    return obj.dataset[key]
}