function create(words) {
   const headDiv = document.getElementById('content');
   words.forEach(x => {
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = x;
      para.style.display = 'none';
      div.addEventListener('click',reveal);
      div.appendChild(para);
      headDiv.appendChild(div);
      
      function reveal(e){
         e.target.firstChild.style.display = '';
      }
   });
}