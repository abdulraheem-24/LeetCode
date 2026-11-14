class Solution:
    def furthestDistanceFromOrigin(self, moves: str) -> int:
        r = 0
        l = 0
        un = 0
        for move in moves:
            if move == "R":
                r += 1
            elif move == "L":
                l += 1
            elif move == "_":
                un += 1
        
        if r > l: 
            r += un
            return r - l
        else:
            l += un
            return l - r
        