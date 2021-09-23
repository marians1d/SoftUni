function solve(one, two, three) {
    let nums = [];
    nums[0] = one;
    nums[1] = two;
    nums[2] = three;

    nums.sort((a, b) => b - a);

    console.log(nums.join('\n'));
}

solve(2, 1, 3);