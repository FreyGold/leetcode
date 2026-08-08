/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0]
    let fast = nums[0]

    do {
        console.log(slow, nums[slow],"---",fast , nums[fast])
        slow = nums[slow]
        fast = nums[nums[fast]]
        

        if(slow == fast){
            console.log("---")
            console.log(slow, ":",nums[slow])
            console.log(fast, ":",nums[fast])
            console.log("---")
            break
        }
    } while(slow != fast)

    slow = nums[0];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};