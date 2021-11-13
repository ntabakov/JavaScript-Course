

function ex(input){
    let catalogue = {};
    const sortedInput = input.sort((a,b) => a.localeCompare(b));
    //console.log(sortedInput);
    sortedInput.forEach((el) =>{
        let firstLetter = el[0];
        let [product,price] = el.split(" : ");
        price = Number(price);

        if(!catalogue[firstLetter]){
            catalogue[firstLetter] = [];
        }
        catalogue[firstLetter].push(`${product}: ${price}`);
    });
    //console.log(catalogue);
    let entri = Object.entries(catalogue);
    //console.log(entri);
    for( let a of entri){
        console.log(a[0]);
        for(let b of a[1]){
            console.log('  ' + b);
        }
    }

}

ex(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);