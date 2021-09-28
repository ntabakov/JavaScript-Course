/**
 * 
 * @param {[]} array 
 */

function sorting(array){
    array.sort((a,b) => a-b);
    const result = [];
   while(array.length != 0){
       result.push(array.shift(),array.pop());
   }
   return result;
}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,6]);