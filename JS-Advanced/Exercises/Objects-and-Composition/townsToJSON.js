function solve(input) {
    const result = [];
    input.shift();
    for (let line of input) {
        line = line.substring(2, line.length - 2);
        let [town, lat, lon] = line.split(' | ');
        lat = Number(lat);
        lon = Number(lon);

        result.push({
            Town: town,
            Latitude: Number(lat.toFixed(2)),
            Longitude: Number(lon.toFixed(2))
        })
    }

    console.log(JSON.stringify(result));
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
