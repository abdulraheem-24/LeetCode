/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let firstOCcurence;
    for (let i = 0; i < haystack.length; i++) {
        if(haystack[i] == needle[0]) {
            firstOCcurence = i;
            for (let j = 1; j < needle.length; j++) {
                if(haystack[i+j] != needle[j]) {
                    firstOCcurence = undefined;
                    break;
                }
            }
        }
        if(firstOCcurence != undefined) {
            return firstOCcurence;
        }
    }
    return -1;
};