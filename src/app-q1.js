// Using a Prompt allow user to enter numbers separated by commas then print the sum of the numbers

const prompt = require("prompt-sync")({ sigint: true });
function addnumbers() {
  const input = prompt("Enter a list of numbers separated by commas:");
  const numbers = input.split(",").map(Number);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log("The sum is:", sum);
}
addnumbers();
