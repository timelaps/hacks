export function forEach(iterable: [] | string, fn: (value: any, i: number, iterable: [] | string) => void) {
  if (!iterable) {
    return
  }
  const length = iterable.length
  for (let i = 0; i < length; i++) {
    if (iterable.hasOwnProperty(i)) {
      fn(iterable[i], i, iterable)
    }
  }
}
