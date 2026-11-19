class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        sum = 0
        num = x
        while num:
            sum += num % 10
            num = num // 10
        return sum if x % sum == 0 else -1
