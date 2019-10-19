export function getSuccessor(tree, item) {
    if (tree == null || tree.root == null) {
        return null;
    }
    return _findSuccessor(tree.root, item);
}
function _findSuccessor(tree, item) {
    if (tree == null) {
        return Number.MAX_VALUE;
    }
    const min = Math.min(_findSuccessor(tree.left, item), _findSuccessor(tree.right, item));
    return tree.val > item && tree.val < min ? tree.val : min;
}    