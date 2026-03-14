/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let ns = "";
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 || s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122 || s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
            ns += s[i].toLowerCase();
        }
    }
    let l = 0, r = ns.length - 1;
    while (l !== r && l <= Math.floor(ns.length / 2)) {
        if (ns[l] !== ns[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};