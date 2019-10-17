export function isValidBST(tree) {
    return _isValid(tree.root);
}
function _isValid(tree){
    if(!tree) return true;

    let leftvalue = false;
    let rightvalue = false;
    const x = _isValid(tree.left);
    const y =  _isValid(tree.right);

    if(x == false ||y == false) {
        return false;
    }

    if(tree.right == null){
        return true;
    }else{
        rightvalue =  tree.right.val >= tree.val;
    }

    if(tree.left == null){
        return true;
    }else{
        leftvalue = tree.left.val <= tree.val;
    }

    return rightvalue && leftvalue;
}
