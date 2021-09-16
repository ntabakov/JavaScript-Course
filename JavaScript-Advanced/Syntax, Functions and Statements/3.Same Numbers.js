function check(number){
    let numberToString = number.toString();
    const firstNumber = numberToString[0];
    let sum=parseInt(firstNumber);
    let isSame = true;

    for(let i = 1 ; i < numberToString.length; i++){
        sum += parseInt(numberToString[i]);
        if(numberToString[i] != firstNumber){
            isSame = false;
        }
        
    }
    console.log(isSame);
    console.log(sum);
}

check(2222222);
check(1234);
