import { main } from './question6'

describe('Chapter 1 - Question 6', () => {
    [
        { arg: 'aaa', out: '3a' },
        { arg: 'bbbbbb', out: '6b' },
        { arg: 'abbbbbbc', out: '1a6b1c' },
        { arg: 'aaabccc', out: '3a1b3c' },
        { arg: 'hhellllllllooooo!', out: '2h1e8l5o1!' },
        { arg: 'woorrrllllddddd', out: '1w2o3r4l5d' }
    ].forEach(context => {

        it(`returns ${context.out} with string ${context.arg}`, function () {
            expect(main(context.arg)).toEqual(context.out);
        });

    });
    [
        'a',
        'aa',
        'abc',
        'aabbcc',
        'ababababccab'
    ].forEach(arg => {

        it(`returns input string where compression doesn't use less space: '${arg}'`, function () {
            expect(main(arg)).toEqual(arg);
        });

    });

    it('returns input where null/undefined', function () {
        expect(main(null)).toBeNull;
        expect(main(undefined)).toBeUndefined;
    });

    it('returns input where empty string', function () {
        expect(main('')).toEqual('');
    });


});

