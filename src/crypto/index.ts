declare var global: any
let cryptoCheck = 'crypto' in global && 'getRandomValues' in crypto
export function crypto() {
  let rnd
  if (cryptoCheck) {
    rnd = (crypto as any).getRandomValues(new Uint32Array(1))
    if (rnd === undefined) {
      cryptoCheck = false
    }
  }
  if (!cryptoCheck) {
    rnd = [Math.floor(Math.random() * 10e12)]
  }
  return rnd[0]
}
