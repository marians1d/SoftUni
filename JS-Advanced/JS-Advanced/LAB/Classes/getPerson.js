const Person = require('./Person');
function solve() {
    const result = [];
    
    result.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    result.push(new Person('SoftUni'));
    result.push(new Person('Stephan', 'Johnson', 25));
    result.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));
    
    return result;
}