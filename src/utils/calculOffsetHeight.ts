export function calculOffsetHeight<T extends HTMLElement>(node: T) {
    let offsetHeight = node.offsetTop
    let offsetParent = node.offsetParent as T
    while (offsetParent) {
        offsetHeight += offsetParent.offsetTop
        offsetParent = offsetParent.offsetParent as T
    }
    return offsetHeight
}