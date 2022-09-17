export function toDate(time?: string | Date) {
    if (time instanceof Date) return time
  
    if (typeof time == 'string') return new Date(time)
  
    return new Date()
  }
/**
 *
 * 目标时区时间转成本地时区时间
 * @param offset 目标时区
 * @param date
 * @returns
 */
 export function toLocalZoneTime(offset: number, date?: string | Date) {
    // 取本地时间
    var localtime = toDate(date)
    // 取本地毫秒数
    var localmesc = localtime.getTime()
  
    var curZone = localtime.getTimezoneOffset() / -60
    var curUtc = (curZone - offset) * 3600000 + localmesc
    return new Date(curUtc)
  }
  /**
   * 本地时区时间转成目标时区时间
   * @param offset 目标时区
   * @param date 本地时区的时间
   * @returns
   */
  export function toTargetZoneTime(offset: number, date?: string | Date) {
    // 取本地时间
    var localtime = toDate(date)
    // 取本地毫秒数
    var localmesc = localtime.getTime()
    // 取本地时区与格林尼治所在时区的偏差毫秒数
    var localOffset = localtime.getTimezoneOffset() * 60000
    // 反推得到格林尼治时间
    var utc = localOffset + localmesc
    // 得到指定时区时间
    var calctime = utc + 3600000 * offset
    var nd = new Date(calctime)
  
    return nd
  }
  export const secondsToDHMS = (s: number) => {
    let d = Math.floor(s / (3600 * 24))
    d && (s -= 3600 * 24 * d)
    let h = Math.floor(s / 3600)
    h && (s -= 3600 * h)
    let m = Math.floor(s / 60)
    m && (s -= m * 60)
    return {
      d,
      h,
      m,
      s: Math.round(s)
    }
  }