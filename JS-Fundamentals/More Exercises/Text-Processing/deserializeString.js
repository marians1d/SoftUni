function solve(input) {
    let result = [];
    while (input[0] !== 'end') {
        let [char, indexes] = input.shift().split(':');
        indexes = indexes.split('/').map(Number);
        for (let index of indexes) {
            result[index] = char;
        }
    }

    console.log(result.join(''));
}

solve(['a:0/2/4/6', 'b:1/3/5', 'end']);
solve([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
]);
