class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        single = 0
        for n in nums:
            single ^= n
        return single


        