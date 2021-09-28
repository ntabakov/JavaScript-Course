function elements(commands){
    let initial = 1;
    const array = [];

    for(let command of commands){
        if(command == 'add'){
            array.push(initial);
        }
        else {
            array.pop();
        }
        initial++;
    }
    
    console.log(array.length == 0 ? 'Empty' :array.join('\n'));
}
elements(['add', 
'add', 
'add', 
'add']
);

elements(['add', 
'add', 
'remove', 
'add', 
'add']
);

elements(['remove', 
'remove', 
'remove']
);