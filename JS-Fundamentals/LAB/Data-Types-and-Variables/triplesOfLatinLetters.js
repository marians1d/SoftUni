function triplesOfLatinLetters(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        let letterOne = String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {
            let letterTwo = String.fromCharCode(97 + j);
            for (let y = 0; y < n; y++) {
                let letterThree = String.fromCharCode(97 + y);
                row = letterOne + letterTwo + letterThree;
                console.log(row);
                row = '';
            }
        }
    }
}