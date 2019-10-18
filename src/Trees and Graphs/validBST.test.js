import { Tree } from './tree';
import { isValidBST } from './validBST';

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
    const result = isValidBST(tree);

    expect(result).toBeFalsy;
});

it('2-Use case must return true', () => {

    //         2
    //       *   *
    //     1       3

    const input = [1, 1];
    const tree = new Tree();

    input.forEach((elem) => {
        tree.add(elem);
    });

    const result = isValidBST(tree);

    expect(result).toBeTruthy;

});