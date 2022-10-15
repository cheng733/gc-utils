/**
 * 移除首尾的引号
 */
 export function removeSideQuote(str: string): string {
    let quote = str[0]
    if (quote !== '\u0022' && quote !== '\u0027') return str
  
    const endQuote = str[str.length - 1]
  
    if (quote !== endQuote) return str
  
    return str.substring(1, str.length - 1)
  }
  