function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const restaurants = {};

        const text = JSON.parse(
            document.querySelector('#inputs textarea').value
        );

        for (const store of text) {
            let [restaurant, workers] = store.split(' - ');
            workers = workers.split(', ');

            if (restaurants[restaurant] == undefined) {
                restaurants[restaurant] = {
                    workers: {},
                    workerCount: 0,
                    totalSalary: 0,
                    averageSalary: 0,
                    bestSalary: Number.MIN_SAFE_INTEGER
                };
            }

            restaurants[restaurant].workerCount += workers.length;

            for (const worker of workers) {
                let [name, salary] = worker.split(' ');
                salary = Number(salary);

                restaurants[restaurant].workers[name] = salary;
                restaurants[restaurant].totalSalary += salary;

                if (restaurants[restaurant].bestSalary < salary) {
                    restaurants[restaurant].bestSalary = salary;
                }
            }
        }

        for (let key in restaurants) {
            restaurants[key].averageSalary =
                restaurants[key].totalSalary / restaurants[key].workerCount;
        }

        const bestRestaurant = Object.keys(restaurants).sort(
            (a, b) =>
                restaurants[b].averageSalary - restaurants[a].averageSalary
        )[0];

        document.querySelector(
            '#bestRestaurant p'
        ).innerHTML = `Name: ${bestRestaurant} Average Salary: ${restaurants[
            bestRestaurant
        ].averageSalary.toFixed(2)} Best Salary: ${restaurants[
            bestRestaurant
        ].bestSalary.toFixed(2)}`;

        const bestWorkers = Object.entries(
            restaurants[bestRestaurant].workers
        ).sort((a, b) => b[1] - a[1]);

        let result = [];

        for (const worker of bestWorkers) {
            result.push(`Name: ${worker[0]} With Salary: ${worker[1]}`);
        }

        document.querySelector('#workers p').innerHTML = result.join(' ');
    }
}