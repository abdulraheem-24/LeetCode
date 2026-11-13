class Solution:
    def judgeCircle(self, moves: str) -> bool:
        x , y = 0,0
        for s in moves:
            if s == "R":
                x += 1
            elif s == "L":
                x -= 1
            elif s == "U":
                y += 1
            elif s == "D":
                y -= 1

        return x == 0 and y == 0 