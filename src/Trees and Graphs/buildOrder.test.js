import { buildOrder } from './buildOrder';



describe(`Simple use cases` , () => {
    it('First test case', () => {

        const input =  [
            [],
            [0],
            [0],
            [1, 2],
            [3],
        ];
    
        const result = buildOrder(input);
        const expected = [0, 1, 2, 3, 4];

        expect(result).toEqual(expected);
    
    });

    it('Second test case', () => {
  
        const input =  [
            [3],
            [0],
            [4],
            [],
            [],
        ];
    
        const result = buildOrder(input);
        const expected = [3, 0, 1, 4, 2];
        
        expect(result).toEqual(expected);

    });
});

describe(`Edge Cases` , () => {
    it('Cyclic dependency', () => {

        const input =  [
            [1],
            [2],
            [0],
            [1, 2],
            [3],
        ];
    
        const result = buildOrder(input);
        const expected = [0, 2, 1, 3, 4];

        expect(result).toEqual(expected);
    
    });
});
