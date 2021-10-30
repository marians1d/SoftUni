function deleteByEmail() {
    const email = document.getElementsByName('email')[0].value;
    const result = document.getElementById('result');
    const rows = document.querySelectorAll('tbody tr');

    for (const row of rows) {
        const currentEmail = row.children[1];
        if (email == currentEmail.textContent) {
            row.remove();
            result.textContent = "Deleted."
            break
        } else {
            result.textContent = "Not found."
        }
    }
}