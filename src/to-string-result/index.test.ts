import { toStringResult } from './index'
describe('toStringResult', () => {
  test('teting inputs', () => {
    expect(toStringResult).toBeFunction()
    expect(toStringResult()).toBe('[object undefined]')
    expect(toStringResult(null)).toBe('[object null]')
    expect(toStringResult(0)).toBe('[object 0]')
  })
})
