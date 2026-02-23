/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let squre = 0, i = 0;
    while (squre < n) {
        if (4 ** i == n) {
            return true;
        }else {
            squre = 4 ** i;
        }
        i++;
    }
    return false;
};