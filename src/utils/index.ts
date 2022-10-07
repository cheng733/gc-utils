export * from './calculOffsetHeight'
export * from './copyToClipBoard'
export * from './debound'
export * from './flatArr'
export * from './throttle'
export * from './isMobile'
export * from './parse'
export * from './storage'
export * from './time'
export * from './dom'
export * from './classnames'
export * from './withNativeProps'
export {default as isDev} from './isDev'
export {default as isBrowser} from './isBrowser'
export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeof value === 'object';
export const isFunction = (value: unknown): value is Function => typeof value === 'function';

export const isString = (value: unknown): value is string => typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isUndef = (value: unknown): value is undefined => typeof value === 'undefined';
