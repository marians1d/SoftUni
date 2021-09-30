function solve(input) {
    let battlefield = {};
    let patternOne = /([A-Za-z ]+) arrives/
    let patternTwo = /([A-Za-z ]+): ([A-Za-z ]+), (\d+)/
    let patternThree = /([A-Za-z ]+) \+ (\d+)/
    let patternFour = /([A-Za-z ]+) defeated/

    for (let line of input) {
        if ((res = patternOne.exec(line)) !== null) {
             battlefield[res[1]] = {
                 totalCount: 0
             };
        } else if ((res = patternTwo.exec(line)) !== null) {
            if (battlefield[res[1]] !== undefined) {
                battlefield[res[1]][res[2]] = Number(res[3]);
                battlefield[res[1]].totalCount += Number(res[3]);
            }
        } else if ((res = patternThree.exec(line)) !== null) {
            let keys = Object.keys(battlefield);
            for (let key of keys) {
                if (Object.keys(battlefield[key]).includes(res[1])) {
                    battlefield[key][res[1]] += Number(res[2]);
                    battlefield[key].totalCount += Number(res[2]);
                }
            }
        } else if ((res = patternFour.exec(line)) !== null) {
            delete battlefield[res[1]];
        }
    }

    let battle = Object.entries(battlefield).sort((a, b) => b[1].totalCount - a[1].totalCount);
    for (let i = 0; i < battle.length; i++) {
        battle[i][1] = Object.entries(battle[i][1]).sort((a, b) => b[1] - a[1]);
    }
    
    for (let i = 0; i < battle.length; i++) {
        let [total] = battle[i][1].filter(x => x[0] === 'totalCount');
        console.log(`${battle[i][0]}: ${total[1]}`);
        for (let j = 0; j < battle[i][1].length; j++) {
            if (battle[i][1][j][0] !== 'totalCount') {
                console.log(`>>> ${battle[i][1][j][0]} - ${battle[i][1][j][1]}`);
            }
        }
    }
}

solve([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);
