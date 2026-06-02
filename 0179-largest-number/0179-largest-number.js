/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let sn = [];
    for (let i = 0; i < nums.length; i++) {
        sn.push(String(nums[i]));
    }
    for (let i = 0; i < sn.length; i++) {
        let l = i + 1;
        while (l < sn.length) {
            if (sn[i][0] < sn[l][0]) {

                [sn[i] , sn[l]] = [sn[l], sn[i]];

            }else if (sn[i][0] == sn[l][0]) {

                    if (sn[i] + sn[l]  < sn[l] + sn[i]) {
                        [sn[i] , sn[l]] = [sn[l], sn[i]];
                    }
            }
            l++;
        }
    }
    return sn.join("");
};