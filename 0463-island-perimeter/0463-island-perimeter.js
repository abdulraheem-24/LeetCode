/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let prm = 0;
    for ( let i = 0; i < grid.length; i++) {
        let land = 0;
        for ( let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                land += 1;
            }
            if ( i > 0 && grid[i - 1][j] == 1 && grid[i][j] == 1) prm -= 2;
            if ( j > 0 && grid[i][j - 1] == 1 && grid[i][j] == 1) prm -= 2;
        }
        prm += land * 4;
    }
    return prm;
};