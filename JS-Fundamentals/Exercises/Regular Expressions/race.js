function solve(input) {
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /\d/g;
    let names = input.shift().split(', ');
    let racers = {};
    while (input[0] != 'end of race') {
        let currentString = input.shift();
        let currentRacer = currentString.match(namePattern).join('');

        if (names.includes(currentRacer)) {
            let currentDistance = currentString
                .match(distancePattern)
                .map(Number);

            let totalDistance = 0;

            for (let dist of currentDistance) {
                totalDistance += dist;
            }

            if (Object.keys(racers).includes(currentRacer)) {
                racers[currentRacer] += totalDistance;
            } else {
                racers[currentRacer] = totalDistance;
            }
        }
    }
    let sortedRacers = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    console.log('1st place: ' + sortedRacers[0][0]);
    console.log('2nd place: ' + sortedRacers[1][0]);
    console.log('3rd place: ' + sortedRacers[2][0]);
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);