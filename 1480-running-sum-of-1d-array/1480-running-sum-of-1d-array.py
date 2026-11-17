class Solution:
    def runningSum(self, nums: list[int]) -> list[int]:
        sum = []
        s = 0
        for n in nums:
            s += n
            sum.append(s)
        return sum