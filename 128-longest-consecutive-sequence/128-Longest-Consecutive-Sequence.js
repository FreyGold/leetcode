/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numset = new Set(nums);
    let longest = 0;
    let cur = 0;
    for(let num of numset){
        if(!numset.has(num-1)){
            cur = 1;
            while(numset.has(num+1)){
                cur++;
                num++;
            }
        }
        longest = longest < cur ? cur : longest;
    }
    return longest
};