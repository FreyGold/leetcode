class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.res=0
        def dfs(node):
            if not node:
                return 0
            right = dfs(node.right)
            left = dfs(node.left)
            
            self.res = max(self.res, left+right)

            return 1 + max(left,right)
        dfs(root)
        return self.res