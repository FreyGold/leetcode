/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    let stack = []
    for(let b of s){
        if(map[b] == undefined){
            stack.push(b)
        }else{
            if(stack[stack.length-1] == map[b]){
                stack.pop()
            }else{
                return false
            }
        }

    }
    return stack == 0
};