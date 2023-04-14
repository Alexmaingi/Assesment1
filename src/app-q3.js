// An Armstrong Number is a number that is equal to the sum of, the power of each digit by the total number of digits. For example, numbers such as 0, 1, 153, 370, 371, 407, 1634, 8208, 9474 are Armstrong numbers.

const prompt = require("prompt-sync")({ sigint: true });

function isArmstrongNumber(number) {
  let digits = number.toString().split("");
  let sum = 0;
  let power = digits.length;
  for (let digit of digits) {
    sum += Math.pow(parseInt(digit), power);
  }
  return number === sum;
}

let number = prompt("Enter a number:");
if (isArmstrongNumber(number)) {
  console.log(number + " is an Armstrong number.");
} else {
  console.log(number + " is not an Armstrong number.");
}
