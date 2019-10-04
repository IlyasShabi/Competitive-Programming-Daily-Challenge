import { twoPointers } from './delete_middle_node';
import { LinkedList } from './singlyLinkedList';

describe('Remove duplicate from Linked List', () => {
    it('Remove middle element in odd array', () => {
        const input = [1, 2, 3, 4, 5, 6];
        let list = new LinkedList(input.shift());
        list.arrayToLinkedList(input);
        const result = list.linkedListToArray(twoPointers(list));
        const expected = [1, 2 , 4 , 5, 6];
        expect(expected).toEqual(result);
    });
    it('Remove middle element in even array', () => {
        const input = [1, 2, 3, 4, 5];
        let list = new LinkedList(input.shift());
        list.arrayToLinkedList(input);
        const result = list.linkedListToArray(twoPointers(list));
        const expected = [1, 2 , 4 , 5];
        expect(expected).toEqual(result);
    });
    it('Remove middle element in even array', () => {
        const input = [1, 2];
        let list = new LinkedList(input.shift());
        list.arrayToLinkedList(input);
        const result = list.linkedListToArray(twoPointers(list));
        const expected = [1, 2];
        expect(expected).toEqual(result);
    });
});



