/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    let dupl = x;
    x = Math.abs(x)
    while (x) {
        let y = x % 10;
        rev = rev * 10 + y;
        x = Math.floor(x / 10);
    }
    if(rev < -(2 ** 31) || rev > (2 ** 31) - 1) {
        return 0;
    }
    return (dupl < 0) ? (rev ** 2) / -rev : rev;
};