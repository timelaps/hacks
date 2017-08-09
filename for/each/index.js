module.exports = function forEach(iterable, fn) {
    if (!iterable) {
        return;
    }
    var i = 0,
        length = iterable.length;
    for (; i < length; i++) {
        fn(iterable[i], i, iterable);
    }
};