export function find(options: { name?: string, id?: string, className?: string }) {
    let val
    if (options.name) val = document.querySelector(options.name)

    if (options.id) val = document.querySelector(`#${options.id}`)

    if (options.className) val = document.querySelector(`.${options.className}`)

    return val
}