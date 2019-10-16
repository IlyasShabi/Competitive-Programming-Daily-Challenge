import { Tree } from './tree';
import { getList } from './listOfDepths';
//https://leetcode.com/problems/binary-tree-level-order-traversal

it('return the level order traversal of binary trees nodes', () => {
    const input = [3,9,20,0,0,15,7];
    const tree =  new Tree();

    input.forEach((elem) =>{
        tree.add(elem);
    });
    const result = getList(tree);
    const expected = [ [ 3 ], [ 0, 9 ], [ 0, 7, 20 ], [ 15 ] ];

    expect(result).toEqual(expected);

});