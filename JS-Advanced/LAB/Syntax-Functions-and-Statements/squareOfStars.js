function starSquare(n) {
    for (let i = 0; i < n; i++) {
        let line = [];
        for (let j = 0; j < n; j++) {
            line.push('*');
        }

        console.log(line.join(' '));
    }
}

starSquare(5);