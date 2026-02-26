/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] > target) return false;
        if (matrix[i][matrix[i].length-1] >= target) {
            for (let x of matrix[i]) {
                if (x == target) return true;
                if (x > target) break;
            }
        }else {
            continue;
        }
    }
    return false;
};