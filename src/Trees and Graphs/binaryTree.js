export class BinaryTree {
    
    constructor(value){
        this.value = value;
        this.left = this.right = undefined;
    }

    insert(value) {
        const node = new BinaryTree(value);
        return _insertRecursion(this, node);
    }
}

function _insertRecursion (tree, node) {
    
    if(tree.value < node.value){
        if(tree.left == null) {
            tree.left = node;
        }else if(tree.right == null){
            tree.right = node;
        }else {
            _insertRecursion(tree.left, node);
        }
    }else{
        if(tree.right == null) {
            tree.right = node;
        }else if(tree.left == null){
            tree.left = node;
        }else{
            _insertRecursion(tree.right, node);
        }
    }
}