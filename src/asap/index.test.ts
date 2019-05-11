declare var setTimeout: Function
import { asap } from './index'

describe('asap', () => {
  test('runs async', (done) => {
    expect.assertions(2)
    let count = 0
    asap(() => {
      expect(count).toBe(1)
      done()
    })
    expect(count).toBe(0)
    count += 1
  })
})