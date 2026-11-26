class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        x = 0
        y = n
        results = []
        flag = True
        while x < n or y < len(nums):
            if flag == True:
                results.append(nums[x])
                flag = False
                x += 1
            elif flag == False:
                results.append(nums[y])
                flag = True
                y += 1
        return results