function validate() {
    const email = document.getElementById('email');
    email.addEventListener('change', onChange);

    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function onChange(ev) {
        if (pattern.test(ev.target.value)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}
