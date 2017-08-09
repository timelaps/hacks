var cryptoCheck = 'crypto' in global && 'getRandomValues' in crypto;
module.exports = function crypto() {
    var rnd;
    if (cryptoCheck) {
        rnd = global.crypto.getRandomValues(new Uint32Array(1));
        if (rnd === undefined) {
            cryptoCheck = false;
        }
    }
    if (!cryptoCheck) {
        rnd = [Math.floor(Math.random() * 10e12)];
    }
    return rnd[0];
};