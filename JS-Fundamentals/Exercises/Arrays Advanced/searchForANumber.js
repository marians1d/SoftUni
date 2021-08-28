function numberSearch(arr, threeActions) {
    let resultArr = takeElements(arr, threeActions[0]);
    resultArr = deleteNumbers(resultArr, threeActions[1]);
    let result = search(resultArr, threeActions[2]);

    console.log(`Number ${threeActions[2]} occurs ${result} times.`);

    function takeElements(arr, elementsToTake) {
        let result = arr.splice(0, elementsToTake);

        return result;
    }

    function deleteNumbers(result, elementsToDelete) {
        for (let i = 0; i < elementsToDelete; i++) {
            result.shift();
        }

        return result;
    }

    function search(result, searchElement) {
        let searchCount = 0;

        for (let i = 0; i < result.length; i++) {
            if (result[i] === searchElement) {
                searchCount++;
            }
        }

        return searchCount;
    }
}