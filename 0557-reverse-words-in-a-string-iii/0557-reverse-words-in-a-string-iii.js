/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let revS = "";
    for (let i = 0; i < s.length; i++) {
        let word = "";
        for (let j = i; j < s.length; j++) {
            i = j;
            if (s[j] !== " ") word += s[j];
            else if (s[j] === " ") {
                word = " " + word;
                break;
            }
        }
        for (let k = word.length - 1; k >= 0; k--) {
            revS += word[k];
        }
    }
    return revS;
};