function solve(input) {
    let [x1, y1, x2, y2] = input;

    let validOne = Math.sqrt(x1 * x1 + y1 * y1) % 1 === 0;
    let validTwo = Math.sqrt(x2 * x2 + y2 * y2) % 1 === 0;

    let x = Math.abs(x1 - x2);
    let y = Math.abs(y1 - y2);
    let validThree = Math.sqrt(x * x + y * y) % 1 === 0;

    let typeOne = validate(validOne);
    let typeTwo = validate(validTwo);
    let typeThree = validate(validThree);    

    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${typeOne}`);
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${typeTwo}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${typeThree}`);

    function validate(isValid) {
        if (isValid) {
            return 'valid';
        } else {
            return 'invalid';
        }
    }
}

solve([2, 1, 1, 1]);

console.log('-----');

solve([3, 0, 0, 4]);
