/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let dpl = x, r = 0;
    x = Math.abs(x);
    while(x){
        let y = x % 10;
        r = (r * 10) + y;
        x = Math.floor(x / 10);
    }
    return (dpl < 0) ? false : (dpl === r);
};