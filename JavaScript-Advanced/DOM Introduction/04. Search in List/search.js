function search() {
   let search = document.getElementById('searchText').value;
   let allElements = Array.from(document.getElementsByTagName('li'));
   allElements.forEach(x=>{
      x.style.fontWeight='normal';
      x.style.textDecoration='none';
   })
   if(search == ''){
      search = '-------------------------';
   }


   let targetElements = allElements
      .filter(x => x.textContent.includes(search))
      .map(x => {
         x.style.fontWeight = 'bold',
            x.style.textDecoration = 'underline'
      });

   let count = targetElements.length;
   let result = document.getElementById('result');
   result.textContent = count + ' matches found';

}