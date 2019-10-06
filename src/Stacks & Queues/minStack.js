/**
 * initialize your data structure here.
 */
export function  MinStack() {
    this.stack = [];
    this.mins = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const length = this.stack.length;
    if( length === 0){
        this.mins.push(x);
    }else{
        const lastMin = this.mins[length -1];
        this.mins.push(lastMin > x ? x : lastMin);
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.mins.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length - 1];    
};