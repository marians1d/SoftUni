function solve(input) {
    let pool = {};
    while (input[0] !== 'Ave Cesar') {
        let line = input.shift();

        if (line.includes(' vs ')) {
            fight(line);
        } else {
            addingGlad(line);
        }
    }

    let poolArr = Object.entries(pool);
    poolArr.sort((a, b) => b[1].totalSkill - a[1].totalSkill)

    for (let i = 0; i < poolArr.length; i++) {
        console.log(`${poolArr[i][0]}: ${poolArr[i][1].totalSkill} skill`);
        delete poolArr[i][1].totalSkill;

        poolArr[i][1] = Object.entries(poolArr[i][1]);

        poolArr[i][1].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let j = 0; j < poolArr[i][1].length; j++) {
            console.log(`- ${poolArr[i][1][j][0]} <!> ${poolArr[i][1][j][1]}`);
        }
    }

    function addingGlad(line) {
        let [gladiator, technique, skill] = line.split(' -> ');
        skill = Number(skill);

        if (!Object.keys(pool).includes(gladiator)) {
            pool[gladiator] = {};
            pool[gladiator].totalSkill = 0
        }

        if (!Object.keys(pool[gladiator]).includes(technique)) {
            pool[gladiator][technique] = skill;
            
            pool[gladiator].totalSkill += skill;
        } else if (pool[gladiator][technique] < skill) {
            pool[gladiator].totalSkill -= pool[gladiator][technique];

            pool[gladiator][technique] = skill;
            pool[gladiator].totalSkill += skill;
        }
    }

    function fight(line) {
        let [gladiatorOne, gladiatorTwo] = line.split(' vs ');

        if (!((Object.keys(pool)).includes(gladiatorOne) && (Object.keys(pool)).includes(gladiatorTwo))) {
            return;
        }

        let firstTechniques = Object.keys(pool[gladiatorOne]);
        let secondTechniques = Object.keys(pool[gladiatorTwo]);

        let result = firstTechniques.filter(technique => secondTechniques.includes(technique));

        if (result.length > 1) {
            if (pool[gladiatorOne].totalSkill - pool[gladiatorTwo].totalSkill >= 0) {
                delete pool[gladiatorTwo];
            } else {
                delete pool[gladiatorOne];
            }
        }
    }
}

solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 400',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);

// solve([
//     'Pesho -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ]);