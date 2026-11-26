class Solution:
    def kidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
        g = max(candies)
        result = []
        for c in candies:
            result.append(True if c + extraCandies >= g else False)
        return result