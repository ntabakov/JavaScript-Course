function calculate(fruit,weight,price){
    const weightInKg = weight/1000
    const moneyNeed = weightInKg * price;

    console.log(`I need $${moneyNeed.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)

}

calculate(`orange`,2500,1.80)