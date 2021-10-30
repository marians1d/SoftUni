function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('.profile button'));
    for (const button of buttons) {
        button.addEventListener('click', toggle);
    }

    function toggle(ev) {
        const button = ev.target;
        const user = button.parentElement.querySelector('div');
        const lock = button.parentElement.querySelector(
            'input[value="unlock"]'
        );

        if (lock.checked) {
            if (button.textContent == 'Show more') {
                user.style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                user.style.display = '';
                button.textContent = 'Show more';
            }
        }
    }
}