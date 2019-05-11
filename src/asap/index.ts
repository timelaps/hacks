declare var setImmediate: Function
declare var setTimeout: Function
declare var process: NodeJS.Process
const later = setImmediate || setTimeout || (process && process.nextTick)
export function asap (fn: () => void) {
  return later(fn)
}
