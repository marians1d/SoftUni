function solve(input) {
    let pattern =
        /^%([A-Z][a-z]+)%[^\|\$\%\.]*<(\w+)>[^\|\$\%\.]*\|(\d+)\|[^\|\$\%\.\d]*(\d+(?:\.\d+)?)\$$/;
    let totalIncome = 0;
    while (input[0] != 'end of shift') {
        let line = pattern.exec(input.shift());

        if (line != null) {
            let currentTotal = Number(line[3]) * Number(line[4]);
            totalIncome += currentTotal;
            console.log(`${line[1]}: ${line[2]} - ${currentTotal.toFixed(2)}`);
        }
    }
    console.log('Total income: ' + totalIncome.toFixed(2));
}

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);