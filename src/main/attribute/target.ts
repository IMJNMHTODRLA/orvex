export function target(
    obj:
    HTMLAnchorElement|HTMLLinkElement|
    HTMLAreaElement|HTMLBaseElement|
    HTMLFormElement,
    val: string
) {
    obj.target = val
}