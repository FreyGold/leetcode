/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let cars = []
    for(let i=0; i < position.length; i++){
        cars.push([position[i], (target-position[i])/speed[i]])
    }
    cars.sort((a, b) => a[0] - b[0])
    let [_, last] = cars.pop()
    let current;
    let count = 1;
    while(cars.length){
        current = cars.pop()[1]
        if(current <= last){
            continue;
        }
        last = current;
        count++;
    }
    return count
};