function vacation(groupNum, groupType, dayOfWeek) {
    let singlePersonPrice = 0;
    let totalPrice = 0;
    switch (groupType) {
      case "Students":
        switch (dayOfWeek) {
          case "Friday":
            singlePersonPrice = 8.45;
            break;
          case "Saturday":
            singlePersonPrice = 9.8;
            break;
          case "Sunday":
            singlePersonPrice = 10.46;
            break;
        }
          totalPrice = singlePersonPrice * groupNum;
  
          if (groupNum >= 30) {
              totalPrice *= 0.85;
          }
        break;
      case "Business":
        switch (dayOfWeek) {
          case "Friday":
              singlePersonPrice = 10.9;
            break;
          case "Saturday":
              singlePersonPrice = 15.6;
            break;
          case "Sunday":
              singlePersonPrice = 16;
            break;
        }
  
        totalPrice = singlePersonPrice * groupNum;
  
          if (groupNum >= 100) {
              totalPrice -= (10 * singlePersonPrice);
          }
        break;
      case "Regular":
        switch (dayOfWeek) {
          case "Friday":
              singlePersonPrice = 15;
            break;
          case "Saturday":
              singlePersonPrice = 20;
            break;
          case "Sunday":
              singlePersonPrice = 22.5;
            break;
        }
  
        totalPrice = singlePersonPrice * groupNum;
  
          if (groupNum >= 10 && groupNum <= 20) {
              totalPrice *= 0.95;
          }
        break;
    }
  
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
  }