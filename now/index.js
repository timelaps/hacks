var toNumber = require('../to-number');
module.exports = function timeNumber() {
    return toNumber(new Date());
};