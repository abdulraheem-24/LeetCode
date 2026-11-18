class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        f = 0
        s = 1
        while s < len(nums):
            if nums[f] == 0 and nums[s] != 0:
                nums[f], nums[s] = nums[s], nums[f]
                f += 1
                s += 1
                continue
            if nums[f] != 0:
                f += 1
            if nums[s] != 0 or nums[s] == 0:
                s += 1
