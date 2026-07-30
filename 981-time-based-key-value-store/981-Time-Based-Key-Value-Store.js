
var TimeMap = function() {
    this.map = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map[key]){
        this.map[key] = [[timestamp, value]]
    }else {
        this.map[key].push([timestamp, value])
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let arr = this.map[key];
    if(!arr){
        return ""
    }
    let l = 0; r = arr.length-1;
    let ans = "";

    while(l <= r){
        let mid = l + Math.floor((r-l)/2);

        if(arr[mid][0] <= timestamp){
            ans = arr[mid][1]
            l=mid+1
        }else{
            r=mid-1
        }
    }
    return ans
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */