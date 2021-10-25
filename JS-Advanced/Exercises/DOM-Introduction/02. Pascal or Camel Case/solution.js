function solve() {
    let text = document.getElementById('text').value;
    const caseType = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');

    text = text.split(' ');

    let resultStr;
    if (caseType == 'Camel Case') {
        resultStr =
            text[0][0].toLowerCase() + text[0].substring(1).toLowerCase();
    } else if (caseType == 'Pascal Case') {
        resultStr =
            text[0][0].toUpperCase() + text[0].substring(1).toLowerCase();
    } else {
        result.innerHTML = 'Error!';
        return;
    }

    for (let i = 1; i < text.length; i++) {
        resultStr +=
            text[i][0].toUpperCase() + text[i].substring(1).toLowerCase();
    }

    result.innerHTML = resultStr;
}
