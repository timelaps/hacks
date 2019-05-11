export function forEach(iterable, fn) {
  if (!iterable) {
    return
  }
  var i = 0,
    length = iterable.length
  for (; i < length; i++) {
    if (iterable.hasOwnProperty(i)) {
      fn(iterable[i], i, iterable)
    }
  }
}