let userInput = prompt("Give a number: ");

function oddOrEven(num) {
    if (isNaN(num)) {
        return `unexpected input`;
    } else if (num % 2 === 0) {
        return("even number");
    } else {
        return("odd number");
      }
}

oddOrEven(parseInt(userInput));