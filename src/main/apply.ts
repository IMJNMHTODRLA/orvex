export function apply(obj: HTMLElement, options: { id?: string[], className?: string[] }) {
    let target = document.body

    if (!options.id) {
        target.appendChild(obj)
        return
    }
    
    if (options.id) {
        for (const name of options.id) {
            const next = target.querySelector<HTMLElement>(`#${name}`)
            if (!next) return
            target = next
        }

        target.appendChild(obj)
        return
    }

    if (options.className) {
        for (const name of options.className) {
            const next = target.querySelector<HTMLElement>(`.${name}`)
            if (!next) return
            target = next
        }

        target.appendChild(obj)
        return
    }
}