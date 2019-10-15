export class BinaryTree {

    constructor() {
        this.data = this.left = this.right = undefined;
    }

    insert(value) {

        if (typeof this.data === 'undefined') {
            this.data = value;
        } else {
            _insertNode(this, new Node(value));
        }
    }
}
export class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = undefined;
    }
}


function _insertNode(tree, newNode) {

    if (newNode.data < tree.data) {
        if (typeof tree.left === 'undefined') {
            tree.left = newNode;
        } else {
            _insertNode(tree.left, newNode);
        }
    } else {
        if (typeof tree.right === 'undefined') {
            tree.right = newNode;
        } else {
            _insertNode(tree.right, newNode);
        }
    }
}