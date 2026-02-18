/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let sArr = s.split(' ');
    if(pattern.length != sArr.length) {
        return false;
    }
    for (let i = 0; i < pattern.length; i++) {
        for (let j = i + 1; j < pattern.length; j++) {
            if (pattern[i] != pattern[j]) {
                if (sArr[i] == sArr[j]) {
                    return false;
                }
            }
            if (pattern[i] == pattern[j]) {
                if (sArr[i] != sArr[j]) {
                    return false;
                }
            }
        }
    }
    return true;
};

