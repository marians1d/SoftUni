function solve(input) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let result = [];

    while ((validPhone = pattern.exec(input)) != null) {
        result.push(validPhone[0]);
    }

    console.log(result.join(', '));
}