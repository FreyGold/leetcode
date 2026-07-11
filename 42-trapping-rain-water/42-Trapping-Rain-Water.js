/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(h) {
    let n = h.length
    let leftMax = [];
    let rightMax = [];
    let currentMax = 0;
    for(let i = 0; i < n; i++){
        currentMax = Math.max(currentMax, h[i])
        leftMax.push(currentMax);
    }
    currentMax = 0;
    for(let i = n-1; i >= 0; i--){
        currentMax = Math.max(currentMax, h[i])
        rightMax.unshift(currentMax);
    }
    let sum = 0;
    for(let i = 0; i<n;i++){
        let num = Math.min(leftMax[i], rightMax[i]) - h[i]
        sum+=num
    }
    return sum

};