function subtract() {
    const first = Number(document.getElementById('firstNumber').value);
    const second = Number(document.getElementById('secondNumber').value);

    document.getElementById('result').innerHTML = first - second;
}