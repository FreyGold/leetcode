# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        stack1=[]
        stack2=[]
        def dfs(node, stack):
            if not node:
                stack.append(None)
                return
            stack.append(node.val)
            dfs(node.left, stack)
            dfs(node.right, stack)
        dfs(p, stack1)
        dfs(q, stack2)
        print(stack1, stack2)
        return stack1 == stack2