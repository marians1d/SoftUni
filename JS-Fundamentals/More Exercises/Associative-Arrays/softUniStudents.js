function solve(input) {
    let courses = {};

    for (let line of input) {
        if (line.includes(': ')) {
            addCapacity(line);
        } else {
            addStudent(line);
        }
    }

    let sortedList = sortingCourses();

    printResult();

    function addCapacity(line) {
        let [name, capacity] = line.split(': ');
        capacity = Number(capacity);

        if (courses[name] === undefined) {
            courses[name] = {
                capacity,
                students: []
            };
        } else {
            courses[name].capacity += capacity;
        }
    }

    function addStudent(line) {
        let pattern =
            /(\w+)\[(\d+)\] with email (\w+@[a-z_.]+\.[a-z]+) joins (.+)/;
        let [, username, credits, email, courseName] = pattern.exec(line);

        if (
            courses[courseName] !== undefined &&
            courses[courseName].capacity > 0
        ) {
            courses[courseName].capacity--;
            courses[courseName].students.push({
                username,
                email,
                credits
            });
        }
    }

    function sortingCourses() {
        let sortedList = Object.entries(courses).sort(
            (a, b) => b[1].students.length - a[1].students.length
        );
        for (let i = 0; i < sortedList.length; i++) {
            sortedList[i][1].students.sort((a, b) => b.credits - a.credits);
        }

        return sortedList;
    }

    function printResult() {
        for (let i = 0; i < sortedList.length; i++) {
            console.log(
                `${sortedList[i][0]}: ${sortedList[i][1].capacity} places left`
            );

            for (let j = 0; j < sortedList[i][1].students.length; j++) {
                let currentStudent = sortedList[i][1].students[j];
                console.log(
                    `--- ${currentStudent.credits}: ${currentStudent.username}, ${currentStudent.email}`
                );
            }
        }
    }
}

solve([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);
console.log('\n--------\n');
solve([
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'
]);