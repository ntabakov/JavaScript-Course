function print(array, number){
    const result = [];
    for(let i = 0 ; i < array.length; i +=number){
        result.push(array[i]);
    }
    return result;
}

print(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);
