/**
 * 
 * @param {[]} array 
 */
function list(array){
    array.sort((a,b)=> a.localeCompare(b));
    array.forEach((x,i) => console.log(`${i+1}.${x}`))
}

list(["John", "Bob", "Christina", "Ema"]);