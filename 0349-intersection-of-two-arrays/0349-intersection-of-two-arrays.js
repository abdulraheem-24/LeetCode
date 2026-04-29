/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersection = [];
    let l = 0;
    while (l <= nums1.length) {
        for (let i = 0; i < nums2.length; i++) {
            if (nums1[l] === nums2[i] && !intersection.includes(nums1[l])) {
                intersection.push(nums1[l])
            }
        }
        l++
    }
    return intersection;
};