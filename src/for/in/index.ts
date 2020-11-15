export function forIn(obj: {[key:string]:any}, fn: (value: any, key: string, obj: object) => void) {
  for (const key in obj) {
    fn(obj[key], key, obj)
  }
}
