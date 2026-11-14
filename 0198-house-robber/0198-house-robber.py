class Solution:
    def rob(self, nums: list[int]) -> int:
        memo = {}
        def max_money(i):
            if i >= len(nums) : 
                return 0; 
            if i in memo: 
                return memo[i]; 

            maximum = max(nums[i] + max_money(i + 2), max_money(i + 1))
            memo[i] = maximum
            return maximum
        
        return max_money(0)