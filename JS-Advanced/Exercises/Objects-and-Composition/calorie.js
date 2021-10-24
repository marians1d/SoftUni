function calorie(properties) {
    let result = {};

    for (let i = 0; i < properties.length; i += 2) {
        result[properties[i]] = Number(properties[i + 1]);
    }

    console.log(result);
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);