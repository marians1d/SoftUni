function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyNumber = document.getElementById('companyNumber');

    const companyCheck = document.getElementById('company');
    companyCheck.addEventListener('change', check);

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submit);

    const companyInfo = document.getElementById('companyInfo');

    const valid = document.getElementById('valid');

    const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    const passwordPattern = /^\w{5,15}$/;
    const emailPattern = /^\w+@\w+\.[\w\.]+$/;

    function submit(ev) {
        ev.preventDefault();

        let correctUsername = !usernamePattern.test(username.value);
        let correctEmail = !emailPattern.test(email.value);

        let correctPassword =
            passwordPattern.test(password.value) == false ||
            confirmPassword.value != password.value;

        let correctSecondPass =
            passwordPattern.test(confirmPassword.value) == false ||
            confirmPassword.value != password.value;

        let correctNumber =
            companyCheck.checked &&
            (Number(companyNumber.value) < 1000 ||
                Number(companyNumber.value) > 9999);

        validateField(username.style, correctUsername);
        validateField(email.style, correctEmail);
        validateField(password.style, correctPassword);
        validateField(confirmPassword.style, correctSecondPass);
        validateField(companyNumber.style, correctNumber);

        if (
            !correctUsername &&
            !correctEmail &&
            !correctPassword &&
            !correctSecondPass &&
            !correctNumber
        ) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    }

    function validateField(style, validation) {
        if (validation) {
            style.border = '';
            style.borderColor = 'red';
        } else {
            style.border = 'none';
        }
    }

    function check(ev) {
        if (companyCheck.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }
}