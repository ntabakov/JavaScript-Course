/**
 * 
 * @param {[]} array 
 */
function rotate(array,number){
    for(let i = 0; i < number; i++){
        array.unshift(array.pop());
    }
    console.log(array.join(` `));
}

rotate(['1', 
'2', 
'3', 
'4'], 
2
);

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);