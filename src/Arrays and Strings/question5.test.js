import { main } from './question5'

describe('Chapter 1 - Question 5', () => {
  it('returns true one replacement', () => {
    const input = ['pale', 'pase'];
    const result = main(...input);
    const expected = true;

    expect(result).toBe(expected);
  });

  [
    ['pale', 'ple'],
    ['pales', 'pale'],
    ['pale', 'bale'],
    ['pale', 'pxle'],
    ['pale', 'pate'],
    ['pale', 'pald'],
    ['answers', 'answer'],
    ['technology', 'etechnology']
  ].forEach(args => {

    it(`returns true one deleted character: '${args[0]}' & '${args[1]}'`, function () {
      expect(main(args[0], args[1])).toBe.true;
    });

  });


  [
    ['pale', 'pl'],
    ['paless', 'pale'],
    ['pale', 'bales'],
    ['abcdefghiz', 'ihgfedcbaa'],
    ['1122334455667788', '9911223344556677'],
    ['45678', '1239'],
    ['abcd', 'dcba']
  ].forEach(args => {

    it(`returns false for strings that are more than one edit: '${args[0]}' & '${args[1]}'`, function () {
      expect(main(args[0].split(''), args[1].split(''))).toBe.false;
    });

  });


});

