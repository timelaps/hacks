function importAsap(situations: string[]) {
  situations.forEach((key) => {
    switch (key) {
      case 'setTimeout':
        global.setTimeout = null as unknown as typeof setTimeout
      case 'setImmediate':
        global.setImmediate = null as unknown as typeof setImmediate
    }
  })
  return require('./index')
}

describe('asap', () => {
  beforeEach(() => {
    jest.resetModules()
  });
  [
    [],
    ['setImmediate'],
    ['setImmediate', 'setTimeout']
  ].forEach((situation) => {
    test('runs async', async (done) => {
      expect.assertions(2)
      let count = 0
      const { asap } = await importAsap(situation)
      asap(() => {
        expect(count).toBe(1)
        done()
      })
      expect(count).toBe(0)
      count += 1
    })
  })
})
