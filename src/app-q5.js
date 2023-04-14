// console logs the numbers from 1 to n, where n is the integer, the function takes as its parameter logs fizz instead of the number for multiples of 3 only logs buzz instead of the number for multiples of 5 only logs fizzbuzz for numbers that are multiples of both 3 and 5

const prompt = require("prompt-sync")({ sigint: true });

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

let n = prompt("Enter a number:");
fizzBuzz(n);
