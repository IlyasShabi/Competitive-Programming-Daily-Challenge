/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(tree, x, y) {
    var xData = getNodeDepthAndparent(tree, x, 0, tree);
    var yData = getNodeDepthAndparent(tree, y, 0, tree);
    return xData.depth === yData.depth && xData.parent !== yData.parent;
    
    
};

function getNodeDepthAndparent(tree, node, depth, parent){
    if(tree == null) return;
    if(tree.val == node) return {depth, parent: parent.val};
    return getNodeDepthAndparent(tree.right, node , ++depth, tree) || getNodeDepthAndparent(tree.left, node , depth, tree);
}