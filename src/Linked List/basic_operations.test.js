import { create, insert, read, removeByIndex , removeByValue } from './basic_operations';

describe('Basic operations on LinkedList', () => {
    it('Create', () => {
        const input = 1;
        expect(create(input)).toBeCalled;
    });
    it('Insert', () => {
        [2, 3, 4, 5, 6].every((num, ind) => {
            expect(insert(num)).toBeCalled;
        });
    });
    it('Read', () => {
        expect(read()).toBeCalled;
    });
    it('Remove By Index ', () => {
        expect(removeByIndex(2)).toBeCalled;
    });
    it('Remove By Value', () => {
        expect(removeByValue(4)).toBeCalled;
    });
});