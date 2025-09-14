export function event(
    obj: HTMLElement,
    callback: (e: Event) => void,
    type: string
) {
    obj.addEventListener(type, callback)
}