function dayOfWeek(day) {
    let week = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (day >= 1 && day <= 7) {
        day--;

        console.log(week[day]);
    } else {
        console.log('Invalid day!');
    }
}