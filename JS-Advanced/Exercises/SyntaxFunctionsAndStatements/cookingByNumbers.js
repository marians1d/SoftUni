function cooking(num, op1, op2, op3, op4, op5) {
    const actions = {
        chop,
        dice,
        spice,
        bake,
        fillet
    }

    let result = Number(num);
    
    result = actions[op1](result)
    console.log(result);
    result = actions[op2](result)
    console.log(result);
    result = actions[op3](result)
    console.log(result);
    result = actions[op4](result)
    console.log(result);
    result = actions[op5](result)
    console.log(result);


    function chop(result) {
        return result / 2;
    }

    function dice(result) {
        return Math.sqrt(result);
    }

    function spice(result) {
        return result + 1;
    }

    function bake(result) {
        return result * 3;
    }

    function fillet(result) {
        return result * 0.8;
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');