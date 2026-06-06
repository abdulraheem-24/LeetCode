/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0, middle = 0, end = nums.length - 1;
    while (middle <= end) {
        switch (nums[middle]) {
            case 0: 
                [nums[start], nums[middle]] = [nums[middle], nums[start]];
                start++;
                middle++;
                break;
            case 1: 
                middle++;
                break;
            case 2: 
                [nums[middle], nums[end]] = [nums[end], nums[middle]];
                end--;
                break; 
        }
    }
};