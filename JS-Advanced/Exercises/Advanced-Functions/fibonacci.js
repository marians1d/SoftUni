function solve() {
    let n1 = 0;
    let n2 = 1;

    return fibonator()

    function fibonator() {
        let nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
        return n1;
    }
}

let fib = solve();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13