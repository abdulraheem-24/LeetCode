class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        count = {}
        for n in nums:
            if n in count:
                count[n] += 1
            else :
                count[n] = 1
        
        for n in count:
            if count[n] == 1:
                return n


        