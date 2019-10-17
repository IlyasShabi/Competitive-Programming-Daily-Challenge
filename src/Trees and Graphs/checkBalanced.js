export function isBalanced(tree) {
    return _checkBalance(tree.root) !== -1;
}
function _checkBalance(tree){
    if(!tree) return 0;

    const leftH = _checkBalance(tree.left);
    const rightH = _checkBalance(tree.right);

    if(leftH == -1 || rightH == -1 || Math.abs(leftH - rightH) > 1) {
        return -1;
    }
    return Math.max(leftH,rightH) + 1;
}
