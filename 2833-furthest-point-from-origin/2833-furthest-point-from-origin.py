class Solution:
    def furthestDistanceFromOrigin(self, moves: str) -> int:
        move = Counter(moves)

        return abs(move["L"] - move["R"]) + move["_"]
        