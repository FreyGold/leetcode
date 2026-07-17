/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let maxes = []
    let deque = []
    for(let i=0; i<nums.length; i++){
        let val = nums[i]
        if(deque.length && deque[0] < i - k + 1){
            deque.shift()
        }
        while(deque.length && val >= nums[deque[deque.length-1]]){
            deque.pop();
        }
        deque.push(i);
        if(i >= k-1){
            maxes.push(nums[deque[0]])
        }
    }

    return maxes
};