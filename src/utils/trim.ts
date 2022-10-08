export const trim = function (str:string) {
    return (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}