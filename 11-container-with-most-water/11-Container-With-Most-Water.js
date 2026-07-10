/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let l = 0; r = heights.length - 1;

    let max = 0;

    while(l < r){
        let cur = Math.min(heights[l], heights[r]) * (r-l);
        max = Math.max(max, cur)
        
        if(heights[r] > heights[l]){
            l++;
        }else{
            r--;
        }
    }
    return max
};