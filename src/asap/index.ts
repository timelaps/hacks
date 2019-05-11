declare var setImmediate: Function
declare var setTimeout: Function
const asap = setImmediate || setTimeout
export { asap }
