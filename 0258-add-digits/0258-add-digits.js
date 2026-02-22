/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) return num;
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return (sum < 10) ? sum : addDigits(sum);
};