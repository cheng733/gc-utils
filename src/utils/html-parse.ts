import { HtmlParser, iHtmlElement } from '@thenja/html-parser'
import { removeSideQuote } from './character-parse'

export function insert(html: string, container: HTMLElement) {
  let htmlParser = new HtmlParser()
  let output = htmlParser.parse(html)

  output.forEach((el) => {
    const node = create(el)

    node && container.appendChild(node)
  })
}
// 注释节点将会被忽略
function create(el: iHtmlElement) {
  if (el.type === 'tag' && el.name) {
    const node = document.createElement(el.name)

    if (el.attributes) {
      for (let attrName in el.attributes) {
        const val = el.attributes[attrName] ? removeSideQuote(el.attributes[attrName]) : ''
        node.setAttribute(attrName, val)
      }
    }
    if (el.children) {
      el.children.forEach((child) => {
        let childNode = create(child)
        childNode && node.appendChild(childNode)
      })
    }

    return node
  }

  if (el.type === 'text' && el.data) return document.createTextNode(el.data)
}

export function insertBefore(html: string, container: Node, child: Node | null) {
  let htmlParser = new HtmlParser()
  let output = htmlParser.parse(html)

  for (let index = 0; index < output.length; index++) {
    const node = create(output[index])
    if (node) {
      container.insertBefore(node, child)
    }
  }
}

type PresetHtmlPosition = 'body' | 'head' | 'headBefore' | 'bodyBefore'

export function quikInsert(html: string, position: PresetHtmlPosition) {
  switch (position) {
    case 'bodyBefore':
      return insertBefore(html, document.body, document.body.firstChild)
    case 'head':
      return insert(html, document.head)
    case 'headBefore':
      return insertBefore(html, document.head, document.head.firstChild)
    case 'body':
    default:
      return insert(html, document.body)
  }
}
