function solve(input) {
    let target = input.shift();

    for (let crystal of input) {
        console.log(`Processing chunk ${crystal} microns`);
        crystal = cut(crystal);
        crystal = lap(crystal);
        crystal = grind(crystal);
        crystal = etch(crystal);
        crystal = xRay(crystal);

        console.log(`Finished crystal ${crystal} microns`);
    }

    function cut(crystal) {
        let count = 0;
        while (crystal / 4 >= target) {
            crystal /= 4;
            count++;
        }

        return printOutput('Cut', count, crystal);
    }

    function lap(crystal) {
        let count = 0;
        while (crystal * 0.8 >= target) {
            crystal *= 0.8;
            count++;
        }

        return printOutput('Lap', count, crystal);
    }

    function grind(crystal) {
        let count = 0;
        while (crystal - 20 >= target) {
            crystal -= 20;
            count++;
        }

        return printOutput('Grind', count, crystal);
    }

    function etch(crystal) {
        let count = 0;
        while (crystal - 2 >= target - 1) {
            crystal -= 2;
            count++;
        }

        return printOutput('Etch', count, crystal);
    }

    function xRay(crystal) {
        let count = 0;
        if (crystal + 1 === target) {
            crystal += 1;
            count++;
        }

        if (count > 0) {
            console.log('X-ray x' + count);
        }

        return crystal;
    }

    function printOutput(string, count, crystal) {
        if (count > 0) {
            console.log(string + ' x' + count);
            console.log('Transporting and washing');

            crystal = Math.floor(crystal)
        }
        return crystal;
    }
}

solve([1000, 4000, 8100]);