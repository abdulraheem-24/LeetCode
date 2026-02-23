/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
        let missed = 0;
        for (let x of nums) {
            if (i == x) break;
            else missed++;
        }
        if (missed >= nums.length) return i;
    }
};