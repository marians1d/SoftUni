function spiceMustFlow(startingYield) {
    let currentYield = startingYield;
    let totalYield = 0;
    let dayCounter = 0;
    if (currentYield >= 100) {
        while (true) {
            dayCounter++;
            if (currentYield >= 26) {
                totalYield += currentYield - 26;
            } else {
                totalYield += currentYield;
            }

            currentYield -= 10;

            if (currentYield < 100) {
                totalYield -= 26;
                break;
            }
        }
    }

    console.log(dayCounter);
    console.log(totalYield);
}