import { showHome } from  './home.js'

document.getElementById('home').addEventListener('click', (event) => {
    if (event.target.tagName == 'A') {
        event.preventDefault();
    }
    
    showHome();
});


window.addEventListener('load', async () => {
    showHome();
});