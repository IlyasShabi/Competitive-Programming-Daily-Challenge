import { stackSort } from './stackSort';



describe('Sort Stack using Another', () => {
    it('First Test Case', () => {
        const array = [4, 2, 3, 1];
    
        const stack = new stackSort(array);
       
        const result = new stackSort([4, 3, 2, 1]);
    
        expect( stack.sort()).toEqual(result);
    });
    it('Second Test Case', () => {
        const array =  [1, 2, 3, 5, 4, 5, 6, 7, 8, 9, 7];
    
        const stack = new stackSort(array);
       
        const result = new stackSort( [9, 8, 7, 7, 6, 5, 5, 4, 3, 2, 1]);

        expect( stack.sort()).toEqual(result);
    });
});