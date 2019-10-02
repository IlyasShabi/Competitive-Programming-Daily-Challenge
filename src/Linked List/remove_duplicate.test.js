import { main } from './remove_duplicate';

describe('Remove duplicate from Linked List', () => {
    it('First Test case', () => {
       const input = [1 , 3 ,3 , 4 ];
       const expected = [1 , 3 ,4];
        expect(main(input)).toEqual(expected);
    });
    it('Second Test case', () => {
       const input = [2 , 2, 3 , 4, 5, 5, 2 ,6, 6];
       const expected = [2 , 3, 4, 5, 6];
        expect(main(input)).toEqual(expected);
    });
    it('Third Test Case', () => {
       const input = [];
     
        expect(main(input)).toEqual(input);
    });
});