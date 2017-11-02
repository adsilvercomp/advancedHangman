//require word js file
var Word = require("./word.js");

// creating and storing a new word object
var firstWord = new Word();

// calling the addStudent method on our firstClass object
firstWord.addLetter("a");
firstWord.addLetter("p");
firstWord.addLetter("p");
firstWord.addLetter("l");
firstWord.addLetter("e");

console.log(firstWord);
console.log(firstWord.wordArr[1]);



