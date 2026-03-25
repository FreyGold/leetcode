1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var subsets = function(nums) {
6        let res = [[]]
7        for(let num of nums){
8            let length = res.length
9            for(let i = 0; i<length; i++){
10                res.push([...res[i], num])
11            }
12        }
13        return res
14    }