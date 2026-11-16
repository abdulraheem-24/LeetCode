class Solution:
    def maxCoins(self, nums: list[int]) -> int:
        memo = {}
        arr = [1] + nums + [1]
        def burst_balloon(left, right):
            if right - left == 1:
                return 0
            if (left, right) in memo:
                return memo[(left, right)]
            
            total_coins = []

            for k in range(left+1, right):
                left_intervel = burst_balloon(left, k)
                right_intervel = burst_balloon(k, right)
                last_balloon =  arr[left] * arr[k] * arr[right]
                last_balloon_coins = left_intervel + right_intervel + last_balloon
                total_coins.append(last_balloon_coins)
            
            maximum = max(total_coins)
            memo[(left, right)] = maximum
            return maximum
        
        return burst_balloon(0, len(arr) - 1)

            