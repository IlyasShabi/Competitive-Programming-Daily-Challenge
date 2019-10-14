import { BinaryTree } from './binaryTree';

it('Initialize data structure and insert data', () => {
    let tree = new BinaryTree(2);

    [1,3,null,4,null,7].forEach((elem) => {
        tree.insert(elem);
    });
    console.log(tree)
});