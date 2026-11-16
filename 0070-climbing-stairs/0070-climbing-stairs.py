class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {}
        def addPrevious(n):
            if n <= 2:
                return n
            if n in memo:
                return memo[n]
            w = addPrevious(n-1) + addPrevious(n-2)
            memo[n] = w
            return w

        return addPrevious(n)