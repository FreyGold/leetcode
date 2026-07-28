/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r=nums.length-1
    let mid;
    if (r == 0){
        return nums[r]
    }
    while(l<r){
        mid=Math.floor((l+r)/2)
        console.log(mid, l, r, nums[mid], nums[r])
        if(nums[mid] <= nums[r]){
            r = mid
        }else if (nums[mid] > nums[r]){
            l = mid+1
        }
    }
    return nums[l]
};