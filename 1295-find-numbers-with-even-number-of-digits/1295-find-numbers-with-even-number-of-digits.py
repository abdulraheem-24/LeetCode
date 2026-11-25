class Solution:
    def findNumbers(self, nums: list[int]) -> int:
        count = []
        memo = {}
        def count_digits(num):
            if num < 10:
                return 1
            if num in memo:
                return memo[num]
            n = num
            c = 0
            while num:
                c += 1
                num //= 10
            memo[n] = c
            return c
                
        for num in nums:
            dc = count_digits(num)
            if dc % 2 == 0:
                count.append(dc)
        return len(count)

