class TreeNode {
    constructor(value) {
        this.val = value;
        this.parent = this.left = this.right = null;
        this.h = 0;
    }
}

export class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        let node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
        }
        else {
            let n = this.root,
                branch;
            while (n) {
                branch = value < n.val ? 'left' : 'right';
                if (!n[branch]) {
                    break;
                }
                n = n[branch];
            }
            node.parent = n;
            n[branch] = node;
        }
    }
}