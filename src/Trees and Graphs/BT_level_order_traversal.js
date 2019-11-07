/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 **/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var res = [];
    getLevels(root, res, 0);
    return res.reverse();
};

function getLevels(tree, res, level){
    if(tree == null) return;
    if(!res[level]){
        res[level] = [tree.val];
    }else{
        res[level].push(tree.val);
    }
    return getLevels(tree.left, res, ++level) || getLevels(tree.right, res, level)
}