export const safeParseToJSON = <T = any>(s: any): T => {
    if (typeof s == 'string') {
      return JSON.parse(s)
    }
    return s
  }