function theatrePromotions(dayType, age) {
    switch (dayType) {
        case 'Weekday':
            if (age <= 18 && age >= 0) {
                console.log('12$');
            } else if (age <= 64 && age >= 0) {
                console.log('18$');
            } else if (age <= 122 && age >= 0) {
                console.log('12$');
            } else {
                console.log('Error!');
            }
            break;
        case 'Weekend':
            if (age <= 18 && age >= 0) {
                console.log('15$');
            } else if (age <= 64 && age >= 0) {
                console.log('20$');
            } else if (age <= 122 && age >= 0) {
                console.log('15$');
            } else {
                console.log('Error!');
            }
            break;
        case 'Holiday':
            if (age <= 18 && age >= 0) {
                console.log('5$');
            } else if (age <= 64 && age >= 0) {
                console.log('12$');
            } else if (age <= 122 && age >= 0) {
                console.log('10$');
            } else {
                console.log('Error!');
            }
            break;
    }
}