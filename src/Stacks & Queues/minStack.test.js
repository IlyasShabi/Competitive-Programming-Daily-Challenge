import { MinStack } from './minStack';

it('Test Cases', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    expect(minStack.getMin()).toEqual(-2);
    minStack.push(0);
    expect(minStack.getMin()).toEqual(-2);
    minStack.push(-3);
    expect(minStack.getMin()).toEqual(-3);
    minStack.pop();
    expect(minStack.getMin()).toEqual(-2);
    minStack.push(-1);
    expect(minStack.getMin()).toEqual(-2);
});