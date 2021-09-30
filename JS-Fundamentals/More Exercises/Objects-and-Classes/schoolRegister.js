function solve(input) {
    let school = {};
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(', ');
        let [, name] = tokens[0].split(': ');
        let [, grade] = tokens[1].split(': ');
        let [, score] = tokens[2].split(': ');
        grade = Number(grade) + 1;
        score = Number(score);

        if (score >= 3) {
            if (school[grade] === undefined) {
                school[grade] = {
                    names: [],
                    totalScore: 0,
                    count: 0
                };
            }

            school[grade].names.push(name);
            school[grade].totalScore += Number(score);
            school[grade].count++;
        }
    }

    let grades = Object.keys(school).sort((a, b) => Number(a) - Number(b));

    for (let grade of grades) {
        console.log(`${grade} Grade`);
        console.log(`List of students: ${school[grade].names.join(', ')}`);
        console.log(
            `Average annual grade from last year: ${(
                school[grade].totalScore / school[grade].count
            ).toFixed(2)}`
        );
        console.log();
    }
}

solve([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
]);
