function solve(input) {
    let [string, state] = input;
    let score = 0;

    for (let i = 0; i < string.length; i++) {
        if (state === 'LOWERCASE' && string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
            score += string.charCodeAt(i);
        } else if (state === 'UPPERCASE' && string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91){
            score += string.charCodeAt(i);
        }
    }

    console.log(`The total sum is: ${score}`);
}

solve(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);