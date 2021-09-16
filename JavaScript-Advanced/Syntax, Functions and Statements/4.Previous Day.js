function previous(year,month,day){
    let dateAsString = `${year}-${month}-${day}`;
    let date = new Date(dateAsString);
    date.setDate(day-1);
    console.log(`${date.getFullYear()}-${parseInt(date.getMonth()) + 1}-${date.getDate()}`);


}

previous(2016, 10, 1);