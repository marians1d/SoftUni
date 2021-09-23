function solve(year, month, day) {
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (month == 2 && year % 4 === 0) {
        monthLength[1] = 29;
    }

    
    if (day == monthLength[month - 1]) {
        day = 0;
        month++;
    }
    day++;
    
    if (month > 12) {
        month = 1;
        year++;
    }

    if (year < 1901) {
        year = 1901;
    }

    console.log(`${year}-${month}-${day}`);
}

solve(2016, 9, 30);