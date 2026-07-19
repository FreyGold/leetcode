/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe(cmp){
        if(cmp !== val){
            throw "Not Equal"
        }
        else return true;
    }
        function notToBe(cmp){
            if(cmp === val){
                throw "Equal"
        }   else return true
    }
    return {
        toBe,
        notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */