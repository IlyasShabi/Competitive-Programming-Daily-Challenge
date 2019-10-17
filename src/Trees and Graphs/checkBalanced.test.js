import { Tree } from './tree';
import { isBalanced } from './checkBalanced';

it('1-Use case must return false', () => {

    //         3
    //       *    *
    //     2       9
    //    *      *    *
    //   0     7       20
    //                    *
    //                     15
    //                       *
    //                        13

    const input = [3, 9, 20, 2, 0, 15, 7, 13];
    const tree = new Tree();

    input.forEach((elem) => {
        tree.add(elem);
    });
    const result = isBalanced(tree);

    expect(result).toBeFalsy;

});

it('2-Use case must return true', () => {
    //         3
    //       *    *
    //     2       9
    //    *      *    *
    //   0     7       20
    //                    *
    //                     15

    const input = [3, 9, 20, 2, 0, 15, 7];
    const tree = new Tree();

    input.forEach((elem) => {
        tree.add(elem);
    });
    const result = isBalanced(tree);

    expect(result).toBeTruthy;

});

describe(`Edge cases`, () => {
    it('Null tree', () => {
  
        const tree = new Tree();
    
        const result = isBalanced(tree);
    
        expect(result).toBeTruthy;
    
    });
    it('One node tree', () => {
  
        const tree = new Tree();
        tree.add(1);
    
        const result = isBalanced(tree);
    
        expect(result).toBeTruthy;
    
    });
});
