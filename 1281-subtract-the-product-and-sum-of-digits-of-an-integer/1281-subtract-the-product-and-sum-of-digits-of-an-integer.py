class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        p = 1
        s = 0
        while n :
            l = n % 10
            p *= l
            s += l
            n = n // 10
        return p - s
