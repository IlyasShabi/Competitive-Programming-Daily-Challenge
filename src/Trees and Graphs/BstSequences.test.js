import { getSequences } from './BstSequences';
import { Tree } from './tree';

describe(`Simple use cases`, () => {
    it(`First test case`, () => {

        const input = [2, 1, 3];
        const tree = new Tree();

        input.forEach((elem) => {
            tree.add(elem);
        });

        console.log(tree);

    });
});