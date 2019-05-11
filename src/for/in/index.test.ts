import { forIn } from './'
describe('forIn', () => {
  Class.prototype = {
    one: 0,
    two: 2,
    three: 3
  }
  test('testing inputs', () => {
    expect(forIn).toBeInstanceOf(Function)
    expect(forIn({}, () => {})).toBeUndefined()
  })
  test('iterates over objects and any available keys on the prototype', () => {
    expect.assertions(2)
    var previous = 0
    var values = []
    var indexes = []
    forIn(new Class(), (value, index) => {
      values.push(value)
      indexes.push(index)
    })
    expect(values).toEqual([1, 2, 3])
    expect(indexes).toEqual(['one', 'two', 'three'])
  })

  function Class() {
    this.one = 1
  }
})