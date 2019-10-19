// https://leetcode.com/submissions/detail/271083101/
export function getSuccessor(tree, node) {

    if (tree == null || tree.root == null) {
        return null;
    }
    return findSuccessor(tree.root, node);
}
function findSuccessor(tree, node) {
    return null;
}
