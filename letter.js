
var Word = require("./word.js");

//the objective of the letter file
  //seperate letters in word

//create a letter object with a method that splits the word and pushes it into 
// the word array.

//create an 
var Letters=function(word){
  //this property will be the counter for userguesses
  this.guessesLeft=10;
  //this property will be the array you push your word into
  this.wordArr = [];
  //this property will be the array that you push your seperated letters into
  this.lettersArr = word.split("");

  //this property will be the array that you push your correct guesses into
  this.correctArr= [];

  //this property will be the array that you push your wrong guesses into
  this.wrongArr=[];

  //loop through the letters array
};

module.exports = Letters;

