class Solution:
    def maximumWealth(self, accounts: list[list[int]]) -> int:
        max = 0
        for m in accounts:
            sum = 0
            for n in m:
                sum += n
            if sum > max:
                max = sum
        return max