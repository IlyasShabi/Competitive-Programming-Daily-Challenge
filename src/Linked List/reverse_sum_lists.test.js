import { addTwoNumbers } from './reverse_sum_lists';
import { LinkedList } from './singlyLinkedList';

describe('Reverse sum of two linked lists', () => {

    const linkedList = new LinkedList();

    it('First test case', () => {
        
        const input1 = [1, 2, 1 ,6];
        let list1 = new LinkedList(input1.shift());
        list1.arrayToLinkedList(input1);
        
        const input2 =[4, 5, 9];
        let list2 = new LinkedList(input2.shift());
        list2.arrayToLinkedList(input2);

        const expected = [5,7,0,7];

        const result = addTwoNumbers(list1, list2);

        expect(linkedList.linkedListToArray(result)).toEqual(expected);
    });
    it('Second test case', () => {
        
        const input1 = [2, 4 ,3];
        let list1 = new LinkedList(input1.shift());
        list1.arrayToLinkedList(input1);
        
        const input2 =[5, 6, 4];
        let list2 = new LinkedList(input2.shift());
        list2.arrayToLinkedList(input2);

        const expected = [7,0,8];

        const result = addTwoNumbers(list1, list2);

        expect(linkedList.linkedListToArray(result)).toEqual(expected);
    });
});



