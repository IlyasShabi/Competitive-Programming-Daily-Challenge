import { Tree } from './tree';

export function balancedTree(array) {
    let tree = new Tree();
    _add(tree, array);
    return tree;
}

function _add(tree, array) {
    if(array.length == 0 ) return;
    if (array.length == 1) {
        tree.add(array[0]);
    } else {
        const mid = Math.floor(array.length / 2);
        tree.add(array[mid]);
        _add(tree, array.slice(0, mid));
        _add(tree, array.slice(mid + 1));
    }
}