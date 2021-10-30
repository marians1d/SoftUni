function validate() {
    const mail = document.getElementById('email');
    mail.addEventListener('change', onChanged);
    
    function onChanged(ev) {
        const pattern = /^[a-z]+@[a-z]+.[a-z]+$/;
        
        if (!pattern.exec(ev.target.value)) {
            ev.target.className = 'error';
        } else {
            ev.target.className = '';
        }
    }
}