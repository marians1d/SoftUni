function solve(input) {
    let trips = {};
        // go trought the input array 
    for (let line of input) {
        // parse input 
        // store the input in a nested object
        let [country, city, price] = line.split(' > ');
        if (trips[country] === undefined) {
            trips[country] = {};
        }
        
        if (trips[country][city] === undefined || trips[country][city] > Number(price)) {
            trips[country][city] = Number(price);
        }
    }

    // sort country names alphabetically
    let sortedTrips = Object.entries(trips).sort((a, b) => a[0].localeCompare(b[0]));
    for (let i = 0; i < sortedTrips.length; i++) {
        sortedTrips[i][1] = Object.entries(sortedTrips[i][1]).sort((a, b) => a[1] - b[1]);
    }

    
    // print output
    for (let i = 0; i < sortedTrips.length; i++) {
        let cityInfo = '';
        for (let j = 0; j < sortedTrips[i][1].length; j++) {
            cityInfo += sortedTrips[i][1][j].join(' -> ') + ' ';
        }

        console.log(sortedTrips[i][0] + ' -> ' + cityInfo);
        
    }
}

solve([
    "Bulgaria > Sofia > 100",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Albania > lkjafdsklj > 100",
    "Bulgaria > Sofia > 700"
])