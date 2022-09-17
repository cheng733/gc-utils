
import Cookies from 'js-cookie'
import { safeParseToJSON } from './parse'
const TOKEN = 'token'

export const setLocalToken = (token?: string) =>
    token ? Cookies.set(TOKEN, token!, { expires: 365 }) : Cookies.remove(TOKEN)
export const getLocalToken = () => Cookies.get(TOKEN)

export const getLocalItem = (key, parse = true) => {
    let val = localStorage.getItem(key)
    if (!val) return val
  
    return parse ? safeParseToJSON(val) : val
  }

export const setLocalItem = (key, val: string | Record<any, any>) => {
    let str = typeof val == 'string' ? val : JSON.stringify(val)
    localStorage.setItem(key, str)
  }
  
  export const clearLocalItem = () => {
    localStorage.clear()
  }