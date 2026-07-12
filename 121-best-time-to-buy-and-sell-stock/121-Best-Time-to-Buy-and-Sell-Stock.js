/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cheapest = prices[0]; 
    let maxP = 0;

    for(let num of prices){
        if(num <= cheapest){
            cheapest = num;
        }else{
            maxP = Math.max(maxP, num-cheapest)
        }
    }
    return maxP
};