function solve(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }

    console.log(result);
}

solve('Hello');