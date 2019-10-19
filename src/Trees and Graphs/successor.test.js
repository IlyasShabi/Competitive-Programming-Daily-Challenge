import { Tree } from './tree';
import { getSuccessor } from './successor';


describe(`Edge cases`, () => {
    it(`Null tree`, () => {
        const tree = new Tree();
        const result = getSuccessor(tree);
        expect(result).toBeNull;
    });

    it(`Second Test Case`, () => {

        //         2
        //       *    *
        //     1        3
    
        const input = [2, 1, 3];
        const tree = new Tree();
    
        input.forEach((elem) => {
            tree.add(elem);
        });
        const result = getSuccessor(tree, 3);
    
        expect(result).toBeNull;
    });  
});

describe(`Normal use cases` , () => {
    it(`First Test Case`, () => {

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
        const result = getSuccessor(tree, 13);
    
        expect(result).toEqual(15);
    });    
    it(`Second Test Case`, () => {

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
        const result = getSuccessor(tree, 2);
    
        expect(result).toEqual(3);
    });
});
