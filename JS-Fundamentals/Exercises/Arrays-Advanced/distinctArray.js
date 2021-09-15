function distinctArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (!result.includes(current)) {
            result.push(current)
        }
    }

    console.log(result.join(" "));
}