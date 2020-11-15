import { forEach } from '../each'
const passed = test()
const HAS = 'hasOwnProperty'
const forOf = passed ? forOfShim : forOfHandler
export {
  forOf
}

function forOfHandler(iterable: [] | string, fn: (value: any, iterable: [] | string) => void) {
  forEach(iterable, (value: any, index: number, iterating: [] | string) => {
    fn(value, iterating)
  })
}

function forOfShim(iterable: [] | string, fn: (value: any, iterable: [] | string) => void) {
  if (!iterable) {
    return
  }
  for (const value of iterable) {
    fn(value, iterable)
  }
}

function test() {
  try {
    for (const value of [true]) {
      return value
    }
  } catch (e) {
    return false
  }
}
