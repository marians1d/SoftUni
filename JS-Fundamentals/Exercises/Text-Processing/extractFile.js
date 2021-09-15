function extractFile(string) {
    let start = string.lastIndexOf('\\') + 1;

    let info = string.slice(start).split('.');
    let extension = info.pop();
    let name = info.join('.');

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');