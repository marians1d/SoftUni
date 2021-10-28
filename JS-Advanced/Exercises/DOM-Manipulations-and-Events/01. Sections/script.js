function create(words) {
   const container = document.getElementById('content');
   container.addEventListener('click', onClick);

   for (const word of words) {
      const div = document.createElement('div');
      const para = document.createElement('p');
      
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);

      container.appendChild(div);
   }


   function onClick(ev) {
      const element = ev.target;

      if (element.tagName == 'DIV' && element != container) {
         ev.target.children[0].style.display =  '';
      }
   }
}