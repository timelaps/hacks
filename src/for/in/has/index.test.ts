import { forOwn } from './'
describe('forOwn', () => {
  Class.prototype = {
    one: 0,
    two: 2,
    three: 3
  }
  test('setup', () => {
    expect(forOwn).toBeInstanceOf(Function)
    expect(forOwn({}, () => {})).toBeUndefined()
  })
  test('iterates over objects and any available keys on the prototype', () => {
    expect.assertions(2)
    var previous = 0
    var values = []
    var indexes = []
    forOwn(new Class(), (value, index) => {
      values.push(value)
      indexes.push(index)
    })
    expect(values).toEqual([1, 2])
    expect(indexes).toEqual(['one', 'two'])
  })

  function Class() {
    this.one = 1
    this.two = 2
  }
})