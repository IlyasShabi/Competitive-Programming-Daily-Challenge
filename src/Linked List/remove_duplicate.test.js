import { main } from './remove_duplicate';

describe('Remove duplicate from Linked List', () => {
    it('Create List from Array', () => {
       const input = [1 , 3 ,3 , 4 ];
        expect(main(input)).toBeCalled;
    });
});