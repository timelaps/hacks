import { forEach } from '../each'
var passed = test()
var HAS = 'hasOwnProperty'
const forOf = passed ? forOfShim : forOfHandler
export {
  forOf
}

function forOfHandler(iterable, fn) {
  forEach(iterable, (value, index, iterable) => {
    fn(value, iterable)
  })
}

function forOfShim(iterable, fn) {
  if (!iterable) {
    return
  }
  for (var value of iterable) {
    fn(value, iterable)
  }
}

function test() {
  try {
    for (var value of [true]) {
      return value
    }
  } catch (e) {
    return false
  }
}