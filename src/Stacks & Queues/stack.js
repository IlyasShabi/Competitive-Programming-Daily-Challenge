class Stack {
    constructor(array){
        this._array = array;
    }

    add(value){
        this._array.push(value);
    }

    remove(){
        this._array.pop();
    }

    peek(){
        const length = this._array.length;
        return this.array[length -1];
    }

    isEmpty(){
        if(!this._array) return true;
        return this._array.length === 0;
    }
}