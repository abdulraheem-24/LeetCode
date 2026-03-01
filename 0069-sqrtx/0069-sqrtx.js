/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) return x;
    let i = 2;
    while (i <= x) {
        if (i * i > x) return i - 1;
        i++;
    }
};