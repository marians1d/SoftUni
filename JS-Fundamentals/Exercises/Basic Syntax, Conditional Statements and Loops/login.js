function login(passwords) {
    let username = passwords[0];
    let falsePassCount = 0;
  
    for (let i = 1; i < passwords.length; i++) {
      let currentPass = passwords[i];
      let usernameIndex = 0;
      let isPassword = true;
  
      for (let j = currentPass.length - 1; j >= 0; j--) {
        if (currentPass[j] !== username[usernameIndex]) {
          isPassword = false;
          break;
        }
        usernameIndex++;
      }
  
      if (isPassword) {
        console.log(`User ${username} logged in.`);
        break;
      }
  
      falsePassCount++;
  
      if (falsePassCount >= 4) {
        console.log(`User ${username} blocked!`);
      } else {
        console.log("Incorrect password. Try again.");
      }
    }
  }