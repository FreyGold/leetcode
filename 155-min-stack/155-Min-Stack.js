
var MinStack = function() {
    this.stack = []
    this.mins = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.stack.push(value)
    if(this.mins.length === 0){
        this.mins.push(value)
    }
    else if (this.mins[this.mins.length-1] >= value){
        this.mins.push(value)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let x = this.stack.pop()
    if(this.mins[this.mins.length-1] === x){
        this.mins.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */