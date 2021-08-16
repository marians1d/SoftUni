function solve(input) {
    let actions = {
        Replace: replaceStr,
        Cut: cut,
        Make: make,
        Check: check,
        Sum: sum,
    }
    let message = input.shift();

    while (input[0] != "Finish") {
        // parse line
        let line = input.shift().split(' ');
        let action = line.shift();
        
        actions[action](...line);
    }

    // Replace
    function replaceStr(currentChar, newChar) {
        // - replace all occurrances of given chart whit oter given char
        // -- make sure you don't use RegEx
        while (message.includes(currentChar)) {
            message = message.replace(currentChar, newChar);
        }

        // - print message
        console.log(message);
    }

    // Cut
    function cut(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        // - remove substring form start to end
        // - use substring method and make rigth and left parts then add them 
        if (validate(startIndex) && validate(endIndex)){
            let left = message.substring(0, startIndex);
            let right = message.substring(endIndex + 1);
    
            message = left + right;
            // - print result
            console.log(message);
        } else {
            console.log('Invalid indices!');
        }
    }

    // Make
    function make(caseCommand) {
        // - use given command to make message give case
        if (caseCommand === "Upper") {
            // change case
            message = message.toUpperCase();
        } else if (caseCommand === "Lower") {
            // change case
            message = message.toLowerCase();
        }
        // - print message
        console.log(message);
    }

    // Check
    function check(string) {
        // - check if message contains given string
        // -- if it does print given message
        if (message.includes(string)) {
            console.log(`Message contains ${string}`);
        } else {
            // -- else print other given message
            console.log(`Message doesn't contain ${string}`);
        }
    }

    // Sum
    function sum(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);

        if (validate(startIndex) && validate(endIndex)) {
            // - by given indexes make a substring
            let string = message.substring(startIndex, endIndex + 1);
            let totalASCIIScore = 0;
            // - convert each char to ASCII and sum their values
            for (let i = 0; i < string.length; i++) {
                totalASCIIScore += string.charCodeAt(i);
            }
            // - print result
            console.log(totalASCIIScore);
        } else {
            console.log('Invalid indices!');
        }
        
    }


    // make a validate function for checking indexes
    function validate(index) {
        return index >= 0 && index < message.length;
    }
}

solve([
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"
])
