import { Stack } from './stack';

export function stackOfPlates(size) {
    this.stackes = new Array();
    this.size = size;
};

stackOfPlates.prototype.push = function (value) {
    const length = this.stackes.length;
    if(length == 0){
        let stack = new Stack();
        stack.add(value);
        this.stackes.push(stack);
    }else{
        let lastStack = this.stackes[length -1];
        if(lastStack.length >= this.size){
            let newStack = new Stack();
            newStack.add(value);
            this.stackes.push(newStack);
        }else{
            lastStack.add(value);
        }
    }
}

stackOfPlates.prototype.pop = function () {
    const length = this.stackes.length;
    if(length !== 0){
        const lastStack = this.stackes[length -1];
        if(lastStack.length !== 0){
            lastStack.pop();
        }
    }
}

stackOfPlates.prototype.peek = function () {
    const length = this.stackes.length;
    if(length !== 0){
        const lastStack = this.stackes[length -1];
        if(lastStack.length !== 0){
            return lastStack[lastStack.length - 1];
        }
        return null;
    }
    return null;
}