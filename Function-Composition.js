/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let variable = x 
        for(let i=functions.length-1; i>=0; i--){
            variable = functions[i](variable)
        }
        return variable
    }
};

