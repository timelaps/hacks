var b = require('@timelaps/batterie');
var stringResult = require('.');
b.describe('to.stringResult', function () {
    b.expect(stringResult).toBeFunction();
    b.expect(stringResult()).toBe('[object undefined]');
    b.expect(stringResult(null)).toBe('[object null]');
    b.expect(stringResult(0)).toBe('[object 0]');
});