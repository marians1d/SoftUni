function solve(string) {
    let chars = {};
    for (let i = 0; i < string.length; i++) {
        if (!Object.keys(chars).includes(string[i])) {
            chars[string[i]] = [];
        }
        chars[string[i]].push(i);
    }

    let result = Object.entries(chars);
    for (let i = 0; i < result.length; i++) {
        console.log(`${result[i][0]}:${result[i][1].join('/')}`);
    }
}

solve('abababa');
console.log('-----');
solve('avjavamsdmcalsdm');