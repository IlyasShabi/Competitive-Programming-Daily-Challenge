// https://leetcode.com/submissions/detail/271083101/
export function isValidBST(tree) {
    return _isValid(tree.root, null, null);
}
function _isValid(root, min, max) {
    if (root == null)
        return true;
    if ((min != null && root.val <= min.val) || (max != null && root.val >= max.val))
        return false;

    return _isValid(root.left, min, root) && _isValid(root.right, root, max);
}
