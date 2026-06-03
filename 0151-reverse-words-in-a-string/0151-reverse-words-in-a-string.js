/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let isSpace = true;
    let word = "";
    let rs = "";
    let sp = "";
    for (let i = s.length - 1; i >= 0; i--) {   
        if (isSpace && s[i] === " ") continue;    
        if (s[i] !== " ") {
            isSpace = false;
            word += s[i];
        }
        if (s[i] === " " || i === 0) {
            isSpace = true; 
            for (let j = word.length - 1; j >= 0; j--) {
                rs += word[j];
            }
            if (i !== 0 && /[a-zA-Z]/.test(s.slice(0 , i)) || /[0-9]/.test(s.slice(0 , i))) {
                rs += " ";
            }
            word = "";
        }
    }
    return rs;
};