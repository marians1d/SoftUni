function train(info) {
    let wagons = info[0].split(" ").map(Number);
    let maxCapacity = Number(info[1]);

    for (let i = 2; i < info.length; i++) {
        let currentAddition = info[i].split(" ");

        if (currentAddition[0] === "Add") {
            newWagon(Number(currentAddition[1]));
        } else {
            addPeople(Number(currentAddition[0]))
        }
    }

    console.log(wagons.join(" "));

    function newWagon(passengers) {
        wagons.push(passengers);
    }

    function addPeople(passengers) {
        for (let i = 0; i < wagons.length; i++) {
            if (passengers + wagons[i] <= maxCapacity) {
                wagons[i] += passengers;
                return;
            }
        }
    }
}