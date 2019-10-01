import * as operations from './basic_operations';

describe('Basic operations on LinkedList', () => {
    it('Create', () => {
        const input = 1;
        expect(operations.create(input)).toBeCalled;
    });
    it('Insert', () => {
        [2, 3, 4, 5, 6].every((num, ind) => {
            expect(operations.insert(num)).toBeCalled;
        });
    });
    it('Read', () => {
        expect(operations.read()).toBeCalled;
    });
    it('Remove By Index ', () => {
        expect(operations.removeByIndex(2)).toBeCalled;
    });
    it('Remove By Value', () => {
        expect(operations.removeByValue(4)).toBeCalled;
    });
});

describe('Array to LinkedList' , () => {
    it('1 - Test Case', () => {
        const input = [1, 2, 3, 4, 5, 6, 7];
        const linkedList = operations.arrayToLinkedList(input);
        expect(linkedList).toBeCalled;
        expect(operations.linkedListToArray(linkedList)).toBeCalled;
    });
});