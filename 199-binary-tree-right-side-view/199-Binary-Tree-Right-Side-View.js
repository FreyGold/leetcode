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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = []
        function bfs(root){
            if (!root) return [];
            
            let queue = [root]
            while(queue.length){
                let lvl = queue.length
                for(let i = 0; i<lvl; i++){
                    const node = queue.shift()
                    if(node.right)  queue.push(node.right);
                    if(node.left)   queue.push(node.left)
                    if(i==0){
                        result.push(node.val)
                    }
                }

            }
        }
        bfs(root)
        return result
};