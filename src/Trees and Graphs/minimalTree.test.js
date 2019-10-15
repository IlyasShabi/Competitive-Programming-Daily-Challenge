import { balancedTree } from './minimalTree';
const util = require('util');

it('Initialize data structure and insert data', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const tree = balancedTree(input);
    expect(tree).toBeCalled;
    console.log(util.inspect(tree, false, null));
});