declare var setImmediate: Function
const asap = setImmediate || setTimeout
export { asap }