function solve(str) {
    let pattern = /\b\w+\b/g;

    let result = [];
    while ((line = pattern.exec(str)) !== null) {
        result.push(line[0].toUpperCase());
    }

    console.log(result.join(', '));
}

solve('Hi, how are you?');