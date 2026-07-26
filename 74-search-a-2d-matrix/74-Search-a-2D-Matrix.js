/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    function findRow(){
        let l = 0
        let r = matrix.length-1
        let res = -1;
        while(l <= r){
            let mid = l + Math.floor((r-l)/2)
            console.log(mid, matrix[mid][0], res)
            if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length-1]>=target){
                res = mid;
                break;
            }else if(matrix[mid][0] < target){
                l = mid+1;
            }else if(matrix[mid][0] > target){
                r = mid-1
            }else{
                res = -1;
            }
        }
        console.log(res)
        return res
    }
    let res = findRow()
    if(res < 0){
        return false
    }
    let arr = matrix[res];
    let l = 0; r = arr.length-1
    while(l <= r){
            let mid = l + Math.floor((r-l)/2)
            if(arr[mid] < target){
                l = mid+1
            }else if(arr[mid] > target){
                r = mid-1
            }else{
                return true;
            } 
    }
    return false
};