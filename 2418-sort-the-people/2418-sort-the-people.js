/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for (let i = 0; i < heights.length; i++) {
        let l = i + 1;
        while (l < heights.length) {
            if (heights[i] < heights[l]) {
                [names[i] , names[l]] = [names[l], names[i]];
                [heights[i] , heights[l]] = [heights[l], heights[i]];
            }
            l++;
        }
    }
    return names;
};