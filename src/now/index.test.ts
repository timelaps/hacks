import { now } from './'
describe('date.now', () => {
  test('gives the time in number form', () => {
    expect(now()).toBeNumber()
  })
})
