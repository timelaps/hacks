var toString = require('../to-string');
module.exports = function callToString(item) {
    return toString.call(item);
};