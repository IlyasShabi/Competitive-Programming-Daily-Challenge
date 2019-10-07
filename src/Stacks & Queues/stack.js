export function Stack(array){
    this._array = array;
}

Stack.prototype.add = function (value){
    this._array.push(value);
}
Stack.prototype.remove = function(){
    this._array.pop();
}
Stack.prototype.peek = function (){
    const length = this._array.length;
    return this.array[length -1];
}
Stack.prototype.isEmpty = function(){
    if(!this._array) return true;
    return this._array.length === 0;
}