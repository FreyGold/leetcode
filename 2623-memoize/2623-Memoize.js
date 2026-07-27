/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let map = {}
    return function(...args) {
        let t = [args]
        if(map[t] !== undefined){
            return map[t]
        }else{
            map[t] = fn(...args)
            return map[t]
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */