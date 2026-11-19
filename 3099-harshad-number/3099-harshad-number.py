class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        s = 0
        n = x
        while n:
            s += n % 10
            n = n // 10
        return s if x % s == 0 else -1
