/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0;
    for (let j = s.length - 1; j >= Math.floor(s.length / 2); j--) {
            if (i !== j) {
                [s[i] , s[j]] = [s[j] , s[i]]
            }else {
                break
            }
        i++;
    }
    return s;
};