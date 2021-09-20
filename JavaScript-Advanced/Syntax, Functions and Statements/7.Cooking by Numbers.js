function cooking(numberAsString,...operations){
    let number = parseFloat(numberAsString);
    for(let i = 0 ; i < 5; i++){
        switch(operations[i]){
            case "chop": number/=2; break;
            case "dice": number = Math.sqrt(number); break;
            case "spice": number+=1; break;
            case "bake": number*=3 ;break;
            case "fillet": number*= 0.8; break;
        }
        console.log(number % 1 != 0 ? number.toFixed(2) : number);
    }
}

//cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');


