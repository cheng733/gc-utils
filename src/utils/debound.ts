export function debound<T extends Function, U extends number>(fn: T, delay: U) {
    let timeout = null as NodeJS.Timeout
    return function () {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}
