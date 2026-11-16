class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        i , j = 0, 0; 
        momo = {}
        def edit_distance(i, j):
            if i == len(word1) and j == len(word2):
                return 0
            if (i, j) in momo:
                return momo[(i, j)]
            if i == len(word1):
                return len(word2) - j
            if j == len(word2):
                return len(word1) - i
            if word1[i] == word2[j]:
                return edit_distance(i+1, j+1)
            minimum = 1 + min(
                edit_distance(i+1, j),
                edit_distance(i, j+1),
                edit_distance(i+1, j+1)
            )
            momo[(i, j)] = minimum
            return minimum
        
        return edit_distance(i, j)