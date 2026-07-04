/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = []
        let curr = []
        function bfs(root){
            if (!root) return [];
            
            const queue = [root]; 

            while (queue.length) {
                let lvlLength = queue.length
                for(let i = 0; i<lvlLength; i++){
                    const node = queue.shift()
                    curr.push(node.val)
                    if (node.left)  queue.push(node.left)
                    if (node.right) queue.push(node.right)
                }
                result.push([...curr])
                curr = []
            }
        }
        bfs(root)
        return result
};