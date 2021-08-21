function addSub(numbers) {
    let originalSum = 0;
    let modifiedSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            originalSum += numbers[i];

            numbers[i] = numbers[i] + i;

            modifiedSum += numbers[i];
        } else {
            originalSum += numbers[i];

            numbers[i] = numbers[i] - i;

            modifiedSum += numbers[i];
        }
    }

    console.log(numbers);
    console.log(originalSum);
    console.log(modifiedSum);
}