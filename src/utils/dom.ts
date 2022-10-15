const trim = function (string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
  }
  export function hasClass(el: Element, cls: string) {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
    if (el.classList) {
      return el.classList.contains(cls)
    } else {
      return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
  }
  export function removeClass(el, cls) {
    if (!el || !cls) return
    var classes = cls.split(' ')
    var curClass = ' ' + el.className + ' '
  
    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i]
      if (!clsName) continue
  
      if (el.classList) {
        el.classList.remove(clsName)
      } else if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
    if (!el.classList) {
      el.className = trim(curClass)
    }
  }
  
  export function createElement(tag: keyof HTMLElementTagNameMap, container?: Element, classname?: string) {
    let el = document.createElement(tag)
    if (container) {
      container.appendChild(el)
    }
    if (classname) {
      el.className = classname
    }
    return el
  }
  export function removeElement(el: Element) {
    let parent = el.parentElement
    parent && parent.removeChild(el)
  }
  /**
   * 通过`a`元素进行下载文件到本地
   * @param url 链接
   * @param name 下载文件名
   */
  export const download = (url: string, name?: string) => {
    var oA = document.createElement('a')
    if (name) {
      oA.download = name
    }
    oA.href = url
    document.body.appendChild(oA)
    oA.click()
    oA.remove() // 下载之后把创建的元素删除
  }
  //解析字符串中一个或者多个script为数组形式
export const scriptParse = (str:string)=>{
  if(typeof str !== 'string')  throw '不是字符串'
  return str.match(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi)
} 