function solve(input) {
    let companies = {};

    for (let line of input) {
        let [name, id] = line.split(' -> ');

        if (companies[name] === undefined) {
            companies[name] = [];
        }

        if (!companies[name].includes(id)) {
            companies[name].push(id);
        }
    }
    let sortedCompanies = Object.keys(companies).sort((a, b) =>
        a.localeCompare(b)
    );

    for (let key of sortedCompanies) {
        console.log(key);

        for (let i = 0; i < companies[key].length; i++) {
            console.log('-- ' + companies[key][i]);
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);