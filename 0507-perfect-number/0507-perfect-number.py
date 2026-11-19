class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num <= 1:
            return False
        total = 0
        for i in range(1, math.isqrt(num) + 1):
            if num % i == 0:
                if num // i == num:
                    total += i
                elif num // i == i:
                    total += i
                else:
                    d = num // i
                    total += d
                    total += i
        return total == num