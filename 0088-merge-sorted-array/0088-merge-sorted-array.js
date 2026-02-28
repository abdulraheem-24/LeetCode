/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (n == 0) return nums1;
    // if (m == 0) {
    //     if (n == 1) return nums1[0] = nums2[0];
    //     else if (n > 1) {
            
    //     }
    // }
    if (m == 0 && n == 1) return nums1[0] = nums2[0];
    let i = nums1.length - 1, p1 = m - 1, p2 = n - 1;
    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) nums1[i--] = nums1[p1--];
        else nums1[i--] = nums2[p2--];
    }
    return nums1;
};