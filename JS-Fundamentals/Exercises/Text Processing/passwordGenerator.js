function solve(input) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let password = input[0] + input[1];
    let replacement = input[2].toUpperCase();
    let indexCount = 0;

    let result = [];

    for (let i = 0; i < password.length; i++) {
        let currentLetter = password[i];
        if (vowels.includes(currentLetter)) {
            currentLetter = replacement[indexCount];
            indexCount++;

            if (indexCount === replacement.length) {
                indexCount = 0;
            }
        }

        result.unshift(currentLetter);
    }

    console.log('Your generated password is ' + result.join(''));
}

solve(['ilovepizza', 'ihatevegetables', 'orange']);