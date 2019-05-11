import { toNumber } from '../to-number'
export function now() {
  return toNumber(new Date())
}