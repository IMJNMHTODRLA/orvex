export function src(
    obj: HTMLImageElement|HTMLScriptElement|
    HTMLIFrameElement|HTMLAudioElement|
    HTMLVideoElement|HTMLEmbedElement|
    HTMLSourceElement|HTMLTrackElement|
    HTMLInputElement|HTMLFrameElement,
    val: string
) {
    obj.src = val
}