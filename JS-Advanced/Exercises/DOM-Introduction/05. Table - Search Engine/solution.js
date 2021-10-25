function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const text = document.getElementById('searchField').value.toLowerCase();
      const rows = document.querySelectorAll('.container tbody tr');

      for (let i = 0; i < rows.length; i++) {
         let currentData = rows[i].children;

         for (let j = 0; j < currentData.length; j++) {
            if (currentData[j].innerHTML.toLowerCase().includes(text)) {
               rows[i].className = 'select';
               document.getElementById('searchField').value = '';
               break;
            } else {
               rows[i].className = '';
            }
         }
      }
   }
}