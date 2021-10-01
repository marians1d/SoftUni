function solve(input) {
    let keys = input.shift().split(' ').map(Number);
    while (input[0] !== 'find') {
        let current = input.shift().split('');
        for (let i = 0; i < current.length; i++) {
            current[i] = String.fromCharCode(current[i].charCodeAt(0) - keys[i % keys.length]);
        }
        current = current.join('');
        let tresure = current.substring(current.indexOf('&') + 1, current.lastIndexOf('&'));
        let coordinates =current.substring(current.indexOf('<') + 1, current.indexOf('>'));
        console.log(`Found ${tresure} at ${coordinates}`);
    }
}

solve([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
]);

solve(['1 4 2 5 3 2 1',
'Ulgwh"jt$ozfj!\'kqqg(!bx"A3U237GC',
'tsojPqsf$(lrne\'$CYfqpshksdvfT$>634O57YC',
'\'stj)>34W68Z@',
'find']
)
