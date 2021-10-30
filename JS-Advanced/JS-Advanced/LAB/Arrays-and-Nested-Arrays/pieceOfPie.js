function solve(arr, start, end) {
    return arr.slice(arr.indexOf(start), arr.indexOf(end) + 1);
}

solve(
    [
        'Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
