declare var setTimeout: Function
import { asap } from './'

describe('asap', () => {
  test('runs async', (done) => {
    expect.assertions(3)
    let count = 0
    asap(() => {
      expect(count).toBe(1)
      count += 1
    })
    setTimeout(() => {
      expect(count).toBe(2)
      done()
    })
    expect(count).toBe(0)
    count += 1
  })
})