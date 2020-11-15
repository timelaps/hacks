import { forIn } from '../'
export function forOwn(obj: {[key:string]:any}, fn: (value: any, key: string, obj: object) => void) {
  forIn(obj, (value, key) => {
    if (obj.hasOwnProperty(key)) {
      fn(value, key, obj)
    }
  })
}
