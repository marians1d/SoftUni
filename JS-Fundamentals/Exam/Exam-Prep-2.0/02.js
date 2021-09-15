function solve(input) {
    let pattern = /(#|\|)([A-Za-z\s]+)\1(\d\d\/\d\d\/\d\d)\1(\d{1,5})\1/g;
    let totalCalories = 0;
    let storage = [];

    while ((line = pattern.exec(input[0])) != null) {
        let name = line[2];
        let date = line[3];
        let calories = Number(line[4]);

        totalCalories += calories;

        storage.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
    }

    let daysLeft = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysLeft} days!`);

    for (let line of storage) {
        console.log(line);
    }
}

solve(['Hello|#I#19/03/20#450#|$5*(@' ])