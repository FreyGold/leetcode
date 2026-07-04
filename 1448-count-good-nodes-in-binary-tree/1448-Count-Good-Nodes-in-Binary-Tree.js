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
 * @return {number}
 */
var goodNodes = function(root) {
    let highest = [root.val]
        let count = 0;
        function traverse(node){
            if(!node) return
            let currentHighest = false
            console.log(node.val, highest[highest.length-1], count)
            if(node.val > highest[highest.length-1]){
                currentHighest = true;
                highest.push(node.val)
            }   
            if(node.val >= highest[highest.length-1]){
                count++;
            }
            traverse(node.left)
            traverse(node.right)
            if(currentHighest){
                highest.pop()
            }
        }
        traverse(root);
        return count
};