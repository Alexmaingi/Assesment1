// Given a string, reverse each word in the sentence. For example, Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

const prompt = require("prompt-sync")({ sigint: true });

function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversedWords = words.map((word) => word.split("").reverse().join(""));
  return reversedWords.join(" ");
}

let sentence = prompt("Enter a sentence:");
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
