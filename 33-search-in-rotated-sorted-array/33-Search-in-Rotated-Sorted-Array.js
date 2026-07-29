/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0, hi = nums.length-1
    while(lo <= hi){
        let mid = Math.floor((lo + hi)/2)
        console.log(mid,":",nums[mid],"//", lo,":",nums[lo],"//",hi,":",nums[hi])
        if(nums[lo] < nums[mid]){
            if(target > nums[lo]&&target<nums[mid]){
                hi=mid-1
            }else if (target == nums[mid]){
                return mid
            }else if (target == nums[lo]) {
                return lo
            }
            else{
                lo=mid+1
            }
        }else{
            if(target > nums[mid] && target < nums[hi]){
                lo=mid+1
            }else if (target ==nums[mid]){
                return mid
            }else if (target ==nums[hi]){
                return hi
            }else{
                hi=mid-1
            }
        }
    }
    return -1
};