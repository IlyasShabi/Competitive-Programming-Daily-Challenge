import { isPalindrome } from './palindrome';
import { fromArray } from './singlyLinkedList';

describe('Check if linked list is palindrome', () => {

    it('First test case', () => {
        
        const input = [1, 2, 3, 4,  3, 2, 1];
        const list = fromArray(input);
        
        const result = isPalindrome(list);

        expect(result).toBeTruthy;
    });
    it('Second test case', () => {
        
        const input = [1, 2, 3, 3, 2, 1];
        const list = fromArray(input);
        
        const result = isPalindrome(list);

        expect(result).toBeTruthy;
    });
    it('Third test case', () => {
        
        const input = [1, 2, 3, 3, 2, 1, 5];
        const list = fromArray(input);
        
        const result = isPalindrome(list);

        expect(result).toBeFalsy;
    });
    it('Edge case', () => {
        
        const input = [];
        const list = fromArray(input);
        
        const result = isPalindrome(list);

        expect(result).toBeTruthy;
    });
});



