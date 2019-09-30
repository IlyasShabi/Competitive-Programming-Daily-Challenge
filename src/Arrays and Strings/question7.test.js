import { main } from './question7'

describe('Chapter 1 - Question 7', () => {

    it('1- test cases from leetCode', () => {
        const input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const result = main(input);
        const expected = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
        ];

        expect(result).toEqual(expected);
    });
    it('2- test cases from leetCode', () => {
        const input = [
            [5, 1, 9, 11],
            [2, 4, 8, 10],
            [13, 3, 6, 7],
            [15, 14, 12, 16]
        ];
        const result = main(input);
        const expected = [
            [15, 13, 2, 5],
            [14, 3, 4, 1],
            [12, 6, 8, 9],
            [16, 7, 10, 11]
        ];

        expect(result).toEqual(expected);
    });
});

