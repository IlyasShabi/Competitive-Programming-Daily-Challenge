import { main } from './kth_to_last';
import { LinkedList } from './singlyLinkedList';

describe('Remove duplicate from Linked List', () => {
    it('Kth to last element', () => {
        const input = [1, 2, 3, 4, 5];
        let list = new LinkedList(input.shift());
        list.arrayToLinkedList(input);
        
        expect(main(list, 2)).toEqual(3);
    });
});