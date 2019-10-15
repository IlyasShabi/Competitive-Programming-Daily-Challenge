import { BinaryTree } from './binaryTree';

it('Initialize data structure and insert data', () => {
    const tree =  new BinaryTree(2);
    [3, 7, 43, 6, 4, 5].forEach((elem) =>{
        tree.insert(elem);
    });
});