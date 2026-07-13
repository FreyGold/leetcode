/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let max = 0;
    let map = new Map();
    let i = 0;
    for(let c of s){
        if(map.has(c)){
            if(map.get(c) >= start){
                start = map.get(c) + 1;
            }
        }
        max = Math.max(i - start + 1, max)
        map.set(c, i) 
        i++;
    }
    return max
};