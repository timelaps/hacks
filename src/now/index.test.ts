import { now } from './index'
describe('date.now', () => {
  test('gives the time in number form', () => {
    expect(now()).toBeNumber()
  })
})
