function focused() {
    const fields = Array.from(document.querySelectorAll('input'));

    for (const field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(ev) {
        ev.target.parentElement.className = 'focused';
    }

    function onBlur(ev) {
        ev.target.parentElement.className = '';
    }
}