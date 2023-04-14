//  PALINDROME –A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward
//  Write a program that checks whether a word is a palindrome or not. Examples of a palindromes (race car)

const prompt = require("prompt-sync")({ sigint: true });

function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

let word = prompt("Enter a word:");
if (isPalindrome(word)) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}
