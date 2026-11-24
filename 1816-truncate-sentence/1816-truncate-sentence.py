class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        ts = ""
        for i in s:
            if i == " ":
                k -= 1
                if k == 0:
                    break; 
            ts += i
        return ts