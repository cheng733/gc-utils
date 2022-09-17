type ClassObj = { [x in string]: any }
type ClassArg = string | Array<ClassArg | ClassArg[]> | ClassObj | null | undefined
/**
 * 转换为类名
 * @param clsArg 类名对象(对象仅支持一层属性,属性值为布尔值),或者数组,或者string
 * @returns
 */
export const classnames = (...clsArg: ClassArg[]): string => {
  let classArr: string[] = []
  clsArg.forEach((ca) => {
    if (typeof ca == 'string') {
      classArr.push(ca.trim())
    } else if (Array.isArray(ca)) {
      classArr.push(classnames(...ca))
    } else {
      for (let k in ca) {
        if (ca[k]) {
          classArr.push(k.trim())
        }
      }
    }
  })
  return classArr.join(' ')
}