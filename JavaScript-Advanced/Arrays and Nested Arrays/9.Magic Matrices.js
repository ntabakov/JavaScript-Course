/**
 * 
 * @param {[]} array 
 */

function magicMatrix(array) {
    let sum = 0;
    array.forEach(x => sum += x[0]);
    console.log(sum);

    for (let row = 0; row < array.length; row++) {
        let currentRowSum = 0;
        let currentColSum = 0;

        for (let col = 0; col < array.length; col++) {
            currentColSum += array[row][col];
            currentRowSum += array[col][row];
        }
        if (currentRowSum != sum || currentColSum != sum) {
            return false;
        }
    }
    return true;
}

console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));

    console.log(magicMatrix([[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]
    ));
    
