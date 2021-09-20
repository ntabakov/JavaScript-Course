function validator(x1,y1,x2,y2){
    let c1 = Math.sqrt(x1**2 + y1**2);
    let c2 = Math.sqrt(x2**2 + y2**2);

    let a = Math.abs(x1-x2);
    let b = Math.abs(y1-y2);
    let c3 = Math.sqrt(a**2 + b**2);

    const validMessage1 = `{${x1}, ${y1}} to {0, 0} is valid`;
    const invalidMessage1 = `{${x1}, ${y1}} to {0, 0} is invalid`;
    const validMessage2 = `{${x2}, ${y2}} to {0, 0} is valid`;
    const invalidMessage2 = `{${x2}, ${y2}} to {0, 0} is invalid`;
    const validMessage3 = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    const invalidMessage3 = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;

    console.log(c3);
    console.log('-------------------------');
    console.log(c1 % 1 != 0 ? invalidMessage1 : validMessage1);
    console.log(c2 % 1 != 0 ? invalidMessage2 : validMessage2);
    console.log(c3 % 1 != 0 ? invalidMessage3 : validMessage3);

}

validator(3,0,0,4);
validator(2, 1, 1, 1);