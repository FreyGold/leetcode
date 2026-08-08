/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res = []
    let cur = []
    let i = 0;
    for(num of arr){
        cur.push(num)
        i++
        if(cur.length == size){
            i=0
            res.push(cur)
            cur = []
        }
    }
    if(cur.length){
    res.push(cur)

    }
    return res
};
