/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(h) {
    let indices = []
    h.push(0)
    let maxH = 0
    for(let i=0; i<h.length; i++){
        let top=indices.length-1
        if(top < 0){
            indices.push(i)
            continue;
        }
        while(h[i]<h[indices[top]]){
            let ind = indices.pop()
            top=indices.length-1
            let val = h[ind]    
            let w;
            if(indices.length){
                w = i - indices[top] - 1
            }else{
                w = i
            }
            maxH = Math.max(maxH, w * val)
        }
        indices.push(i)

    }
    return maxH
};