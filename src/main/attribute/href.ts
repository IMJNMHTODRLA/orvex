export function href(
    obj:
    HTMLAnchorElement|HTMLLinkElement|
    HTMLAreaElement|HTMLBaseElement,
    val: string
) {
    obj.href = val
}