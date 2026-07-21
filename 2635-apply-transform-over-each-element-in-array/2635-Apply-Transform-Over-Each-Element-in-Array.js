/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let arra = arr.map((e, i)=>fn(e, i))
    return arra
};