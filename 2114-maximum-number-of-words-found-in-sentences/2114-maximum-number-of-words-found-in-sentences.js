/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let mostWord = 0;
    for (let w of sentences) {
        let count = 0;
        for (let j = 0; j < w.length; j++) {
            if(w[j] !== " " && w?.[j + 1] === " " || w[j] !== " " && w[j + 1] === undefined){
                count++;
            }
        }
        if (mostWord < count) mostWord = count;
    }
    return mostWord;
};