function solve(input) {
    input = input.split(', ');
    for (let ticket of input) {
        ticket = ticket.trim();
        if (ticket.length === 20) {
            const first = ticket.substring(0, ticket.length / 2);
            const second = ticket.substring(ticket.length / 2);

            const pattern = /\${6,}|\@{6,}|\#{6,}|\^{6,}/;
            const firstPat = pattern.exec(first);
            const secondPat = pattern.exec(second);

            let jackpot = '';
            if (
                firstPat !== null &&
                secondPat !== null &&
                firstPat[0].includes(secondPat[0])
            ) {
                if (secondPat[0].length === 10) {
                    jackpot = ' Jackpot!';
                }
                console.log(
                    `ticket "${ticket}" - ${secondPat[0].length}${secondPat[0][0]}${jackpot}`
                );
            } else if (
                firstPat !== null &&
                secondPat !== null &&
                secondPat[0].includes(firstPat[0])
            ) {
                console.log(
                    `ticket "${ticket}" - ${firstPat[0].length}${firstPat[0][0]}${jackpot}`
                );
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        } else {
            console.log('invalid ticket');
        }
    }
}

solve('ash$$$$$$$Ca$$$$$$hs');
solve('$$$$$$$$$$$$$$$$$$$$       ,       aabb, th@@@@@@eemo@@@@@@ey');
solve('validticketnomatch:(');
