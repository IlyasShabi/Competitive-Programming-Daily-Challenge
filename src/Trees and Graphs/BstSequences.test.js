import { getSequences } from './BstSequences';
import { Tree } from './tree';

describe(`Simple use cases`, () => {
    it(`First test case`, () => {

        //          3
        //      1       5
        //   0     2  4    6

        const input = [3, 1, 2, 0, 5, 4, 6];
        const tree = new Tree();

        input.forEach((elem) => {
            tree.add(elem);
        });

        const expected = [
            [3, 1, 0, 2, 5, 4, 6],
            [3, 1, 0, 2, 5, 6, 4],
            [3, 1, 2, 0, 5, 4, 6],
            [3, 1, 2, 0, 5, 6, 4],
            [3, 5, 4, 6, 1, 0, 2],
            [3, 5, 4, 6, 1, 2, 0],
            [3, 5, 6, 4, 1, 0, 2],
            [3, 5, 6, 4, 1, 2, 0]
        ];
        const result = getSequences(tree);

        expect(result).toEqual(expected);

    });
    it(`Second test case`, () => {

        const input = [2, 1, 3];
        const tree = new Tree();

        input.forEach((elem) => {
            tree.add(elem);
        });

        const expected = [[2, 1, 3], [2, 3, 1]];
        const result = getSequences(tree);

        expect(result).toEqual(expected);

    });
});
describe(`Edge Cases` , () => {
    it(`Single node`, () => {
        const input = [1];
        const tree = new Tree();

        input.forEach((elem) => {
            tree.add(elem);
        });

        const expected = [1];
        const result = getSequences(tree);

        expect(result).toEqual(expected);

    });

    it(`Empty tree` , () => {

        const tree = new Tree();

        const expected = [];
        const result = getSequences(tree);

        expect(result).toEqual(expected);
    });
});