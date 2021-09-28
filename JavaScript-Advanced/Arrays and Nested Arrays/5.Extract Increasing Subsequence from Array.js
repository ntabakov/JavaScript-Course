/**
 * 
 * @param {[]} array 
 */
function filter(array){
    const result = [];
    let biggest = array[0];
    for(let i = 0; i < array.length; i ++){
        if (array[i] >= biggest){
            result.push(array[i]);
            biggest = array[i];
        }
    }
    return result;
}
console.log(filter([20,3,2,15,6,1]).join());

// let arr = [1,2,3,4,5,6,7];
// arr.splice(3,1);
// console.log(arr);
//20
3
2
15
6
1
filter();