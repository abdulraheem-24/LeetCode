/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strArr = s.split(' ');
    let flag = false;
    for (let i = strArr.length - 1; i >= 0; i--) {
        if (strArr[i] == false) {
            flag = false;
        }else {
            flag = true;
        }
        if(flag == true) {
            return strArr[i].length;

        }
    }
};