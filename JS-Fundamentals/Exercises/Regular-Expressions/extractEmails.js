function solve(string) {
    let pattern = /\s([a-z]+[\.\-_]?[a-z]*@[a-z\-]+\.?[a-z]*\.[a-z]+)\b/g;
    while ((email = pattern.exec(string)) !== null) {
        console.log(email[1]);
    }
}

solve(
    'Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'
);