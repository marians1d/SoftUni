function solve(input) {
    let n = Number(input.shift());
    let count = 0;
    let pattern = /U\$([A-Z][a-z]{2,})U\$P@\$([A-Za-z]{5,}\d+)P@\$/

    for (let i = 0; i < n; i++) {
        if ((registration = pattern.exec(input[i])) !== null) {
            let username = registration[1];
            let password = registration[2];

            count++;
            console.log('Registration was successful');
            console.log(`Username: ${username}, Password: ${password}`);
        } else {
            console.log('Invalid username or password');
        }
    }

    console.log(`Successful registrations: ${count}`);
}

// solve([
//     "3",
//     "U$MichaelU$P@$asdqwe123P@$",
//     "U$NameU$P@$PasswordP@$",
//     "U$UserU$P@$ad2P@$"
// ])

solve([
    "2",
    "U$TommyU$P@$asdqwe123P@$",
    "Sara 1232412"
])