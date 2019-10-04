import { main, twoPointers } from './kth_to_last';
import { LinkedList } from './singlyLinkedList';

describe('Remove duplicate from Linked List', () => {
    it('Kth to last element', () => {
        const input = [1, 2, 3, 4, 5];
        let list = new LinkedList(input.shift());
        list.arrayToLinkedList(input);
        
        expect(main(list, 2)).toEqual(3);
    });
    it('Kth to last element - two pointers', () => {
        const input = [1, 2, 3, 4, 5];
        let list = new LinkedList(input.shift());
        list.arrayToLinkedList(input);
        
        expect(twoPointers(list, 2)).toEqual(3);
    });
    it('Edge case - two pointers', () => {
        const input = [8];
        let list = new LinkedList(input.shift());
        list.arrayToLinkedList(input);
        
        expect(twoPointers(list, 0)).toEqual(8);
    });

    [
        {
          list: [8, 5, 1],
          k: 0
        },
        {
          list: [8, 5, 1],
          k: 1
        },
        {
          list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
          k: 8
        },
        {
          list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
          k: 16
        }
      ].forEach((elem, i) => {
        it(`${i+1} - Kth to last element - two pointers  - ${elem.list.length - 1 - elem.k} `, () => {
            const input = elem.list;
            let list = new LinkedList(input.shift());
            list.arrayToLinkedList(input);
            const expected = elem.list[elem.list.length - 1 - elem.k];
            expect(twoPointers(list, elem.k)).toEqual(expected);
        });
      });
});



