export function Queue(array = []){
    this._array = array;
}

Queue.prototype.add = function (value){
    this._array.push(value);
}

Queue.prototype.remove = function(){
    this._array.shift();
}

Queue.prototype.peek = function (){
    return this._array[0];
}

Queue.prototype.isEmpty = function(){
    if(!this._array) return true;
    return this._array.length === 0;
}

Queue.prototype.size = function(){
    return this._array.length;
}