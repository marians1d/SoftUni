export function notify(message) {
    document.getElementById('errorBox').style.display = 'block';
    document.querySelector('#errorBox span').textContent = message;

    const hide = () => document.getElementById('errorBox').style.display = 'none';
    
    setTimeout(hide, 3000);
}