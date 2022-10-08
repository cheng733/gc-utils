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
  