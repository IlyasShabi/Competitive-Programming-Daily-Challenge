export class BinaryTree {
    
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
    insert(value){
        const node = new BinaryTree(value);
        _insertRecursion(this, node);
    }
}

function _insertRecursion (tree, node) {
    if(tree.right === null) {
        tree.right = node;
    }else if(tree.left === null){
        tree.left = node;
    }else if(tree.value > node.value){
        _insertRecursion(tree.right, node);
    }else{
        _insertRecursion(tree.left, node);
    }
}