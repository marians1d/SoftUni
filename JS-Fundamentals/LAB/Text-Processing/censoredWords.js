function censored(str, word) {
    let censoredStr = str.split(word);
    console.log(censoredStr.join('*'.repeat(word.length)));
}