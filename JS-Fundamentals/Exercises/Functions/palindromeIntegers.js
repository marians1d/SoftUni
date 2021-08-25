function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i].toString();
        let isPalindrome = true;
        let endIndex = currentNum.length - 1;
        for (let j = 0; j < currentNum.length / 2; j++) {
            if (currentNum[j] !== currentNum[endIndex]) {
                isPalindrome = false;
                break;
            }
            endIndex--;
        }

        console.log(isPalindrome);
    }
}