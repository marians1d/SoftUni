function generateReport() {
    let result = [];
    const checked = document.querySelectorAll('th input');
    const rows = document.querySelectorAll('tbody tr');

    for (let row of rows) {
        let cols = row.children;
        let currentRow = {};
        for (let i = 0; i < cols.length; i++) {
            if (checked[i].checked) {
                currentRow[checked[i].name] = cols[i].textContent;
            }
        }

        result.push(currentRow);
    }

    document.getElementById('output').textContent = JSON.stringify(result);
}