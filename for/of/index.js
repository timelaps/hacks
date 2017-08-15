var passed = test();
var HAS = 'hasOwnProperty';
module.exports = passed ? function forOf(iterable, fn) {
    if (!iterable) {
        return;
    }
    for (var value of iterable) {
        fn(value, iterable);
    }
} : function forOf(iterable, fn) {
    forEach(iterable, function (value, index, iterable) {
        fn(value, iterable);
    });
};

function test() {
    try {
        for (var value of[true]) {
            return value;
        }
    } catch (e) {
        return false;
    }
}