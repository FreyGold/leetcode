/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const value = Promise.all([promise1, promise2]).then(value=>value.reduce((a,c)=>a+c), 0)
    return value
};

