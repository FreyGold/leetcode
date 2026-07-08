/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i1 = 0, i2 = numbers.length-1;
    while(i1<i2){
        let cur = numbers[i2]+numbers[i1]
        console.log(cur, i1, i2)
        if(cur > target){
            i2--;
        }
        else if(cur == target){
            return [i1+1,i2+1]
        }else{
            i1++
        }
    }
};