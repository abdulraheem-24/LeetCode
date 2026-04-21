/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let modfied = "";
    if (s.length <= k) {
        for ( let i = s.length - 1; i >= 0; i--) {
            modfied += s[i];
        }
        return modfied;
    }
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (i == k * j) {
            let r = 0;
            if (i + k >= s.length) r = s.length;
            else if (i + k < s.length) r = i + k;
            while (r > i) {
                modfied += s[r - 1];
                r--;
            }
            j += 2;
            i += k - 1;
        }else {
            modfied += s[i];
        }
    }
    return modfied;
};