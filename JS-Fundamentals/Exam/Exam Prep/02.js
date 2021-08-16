function solve(string) {
    let totalScore = 0;
    let destinations = [];

    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g
    let match = pattern.exec(string);

    while (match != null) {
        let currentMatch = match[2];

        destinations.push(currentMatch);
        totalScore += currentMatch.length;

        match = pattern.exec(string);
    }

    console.log('Destinations: ' + destinations.join(', '));
    console.log('Travel Points: ' + totalScore);
}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
solve('ThisIs some InvalidInput')