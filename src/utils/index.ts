function throttle<T extends Function, U extends number>(fn: T, delay: U) {
    let timeout = null
    return function () {
        if (!timeout) {
            timeout = setTimeout(() => {
                fn.apply(this, arguments)
                timeout = null
            }, delay)
        }
    }
}
function debound<T extends Function, U extends number>(fn: T, delay: U) {
    let timeout = null
    return function () {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

function calculOffsetHeight<T extends HTMLElement>(node: T) {
    let offsetHeight = node.offsetTop
    let offsetParent = node.offsetParent as T
    while (offsetParent) {
        offsetHeight += offsetParent.offsetTop
        offsetParent = offsetParent.offsetParent as T
    }
    return offsetHeight
}

function flatArr<T extends Array<any>>(arr: T) {
    let target = arr
    while (target.some(arr => Array.isArray(arr))) {
        target = [].concat(...target) as T
    }
    return target
}

export {
    throttle,
    debound,
    calculOffsetHeight,
    flatArr,
}