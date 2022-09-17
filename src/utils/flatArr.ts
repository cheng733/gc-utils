export function flatArr<T extends Array<any>>(arr: T) {
    let target = arr
    while (target.some(arr => Array.isArray(arr))) {
        target = [].concat(...target) as T
    }
    return target
}