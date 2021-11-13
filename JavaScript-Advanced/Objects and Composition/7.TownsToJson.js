function ex(arr){
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        let row = arr[i].split(' | ');
        row[0] = row[0].slice(2);
        row[2] = row[2].slice(0,row[2].length-2);
        let obj = {
            Town: row[0],
            Latitude: Math.round(Number(row[1]) * 100) / 100,
            Longitude: Math.round(Number(row[2]) * 100) / 100,
        }
        result.push(obj);
        
    }
    console.log(JSON.stringify(result));
}

ex(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);