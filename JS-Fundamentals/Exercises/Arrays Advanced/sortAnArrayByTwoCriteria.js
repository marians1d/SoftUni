function twoCriteriaSort(arr) {
    arr.sort((a, b) => a.length - b.length);
    arr.sort(function compare(a, b) {
        if (a.length - b.length === 0) {
            return a.localeCompare(b);
        }
    });

    console.log(arr.join("\n"));
}