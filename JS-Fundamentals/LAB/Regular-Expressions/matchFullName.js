function solve(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = [];

    while ((validName = pattern.exec(input)) != null) {
        result.push(validName[0]);
    }

    console.log(result.join(' '));
}