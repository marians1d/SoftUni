function solve(...args) {
    const obj = {};
    for (const arg of args) {
        console.log(`${typeof arg}: ${arg}`);
        
        if (!obj[typeof arg]) {
            obj[typeof arg] = 0;
        }

        obj[typeof arg]++;
    }

    printTaly(obj);
    
    function printTaly(obj) {
        const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
        for (let el of sorted) {
            console.log(`${el[0]} = ${el[1]}`);
        }
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });