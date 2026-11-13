class Solution:
    def judgeCircle(self, moves: str) -> bool:
        vertical = moves.count("U") - moves.count("D")
        horizondal = moves.count("R") - moves.count("L")

        return vertical == horizondal == 0