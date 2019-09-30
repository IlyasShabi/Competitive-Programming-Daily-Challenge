import { main } from './question8'

describe('Chapter 1 - Question 8', () => {

    it('1- test cases from leetCode', () => {
        const input = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ];
        const result = main(input);
        const expected = [
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1]
        ];

        expect(result).toEqual(expected);
    });
    it('2- test cases from leetCode', () => {
        const input = [
            [0, 1, 2, 0],
            [3, 4, 5, 2],
            [1, 3, 1, 5]
        ];
        const result = main(input);
        const expected = [
            [0, 0, 0, 0],
            [0, 4, 5, 0],
            [0, 3, 1, 0]
        ];

        expect(result).toEqual(expected);
    });
});

