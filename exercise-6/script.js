function checkInputNumber() {
    let userInput = prompt("Give me a number");
    let num = parseInt(userInput);
    
    if (isNaN(num)) {
      console.log("Invalid input. Please enter a number.");
      return;
    }
  
    for (let i = num; i >= 0; i--) {
      if (i < 50) {
        console.log(`Currently at number ${num}. Terminating the loop`);
        break;
      } else if (i % 10 === 0) {
        console.log("The number is divisible by 10. Skipping the number");
        continue;
      } else if (i % 5 === 0) {
        console.log(i);
      }
    }
  }
  
  checkInputNumber();
  