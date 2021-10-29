function solution(n1) {
    
    add.toString = () => {
        return n1;
    }
    
    return add;
    
    function add(n2) {
        n1 += n2;
        return add;
    }
}

console.log(solution(1)(6)(-3).toString());