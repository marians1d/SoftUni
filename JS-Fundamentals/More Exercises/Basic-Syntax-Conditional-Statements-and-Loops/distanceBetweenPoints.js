function solve(xOne, yOne, xTwo, yTwo) {
    let a = Math.abs(xOne - xTwo);
    let b = Math.abs(yOne - yTwo);

    let c = Math.sqrt((a * a) + (b * b));

    console.log(c);
}

solve(2.34, 15.66, -13.55, -2.9985)