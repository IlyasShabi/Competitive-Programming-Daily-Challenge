export function getList(tree) {
    const list = [];
    _parseTree(tree.root, 0, list);
    return list;
}

function _parseTree(tree, i, list){
    if(tree == null) return;
    if(!list[i]){
        list[i] = [tree.val];
    }else{
        list[i].push(tree.val);
    }
    _parseTree(tree.left, i+1, list);
    _parseTree(tree.right, i+1, list);

}