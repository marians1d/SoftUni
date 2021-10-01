function solve(input) {
    let str = input[0];
    let pattern = input[1];

    while (pattern.length > 0 && str.split(pattern).length >= 3) {
        console.log('Shaked it.');
        str = str.split(pattern);
        
        if (str.length > 3) {
            for (let i = str.length - 2; i > 1; i--) {
                str.splice(i, 0, pattern);
            }
        }
        str = str.join('');

        pattern = pattern.split('');
        pattern.splice(pattern.length / 2, 1);
        pattern = pattern.join('');
    }
    console.log('No shake.');

    console.log(str);
}

solve(['astalavista baby', 'sta']);
solve(['#mtmmtm#mtm!mtm!.mtm*.#', 'mtm']);