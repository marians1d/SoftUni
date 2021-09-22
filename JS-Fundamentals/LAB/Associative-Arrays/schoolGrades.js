function grades(info) {
    const students = {};
    for (const line of info) {
        let [name, ...grades] = line.split(' ');
        grades = grades.map(Number);

        if (students[name]) {
            grades = students[name].concat(grades);
        }
        students[name] = grades;
    }

    const sortedStudents = Object.entries(students).sort(sorted);

    for (const student of sortedStudents) {
        console.log(`${student[0]}: ${student[1].join(', ')}`);
    }

    function sorted(a, b) {
        const aAverage = a[1].reduce((total, current) => total + current) / a[1].length;
        const bAverage = b[1].reduce((total, current) => total + current) / b[1].length;

        return aAverage - bAverage;
    }
}

grades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);