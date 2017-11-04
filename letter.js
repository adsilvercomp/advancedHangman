
var Word = require("./word.js");

//the objective of the letter file
  //seperate letters in word

//create a letter object with a method that splits the word and pushes it into 
// the word array.

//create an 
var Letters=function(guessesLeft, wordArr, lettersArr, correctArr, wrongArr){
  //this property will be the counter for userguesses
  this.guessesLeft=10;
  //this property will be the array you push your word into
  this.wordArr= [];
  //this property will be the array that you push your seperated letters into
  this.lettersArr= [];

  //this property will be the array that you push your correct guesses into
  this.correctArr= [];

  //this property will be the array that you push your wrong guesses into
  this.wrongArr=[];

  //push word into letters array
  this.addWord= function(band){
      this.wordArr.push(new Word(band));

  }

  //grab the word from word array, seperate the letters and push letters into letter array.
  this.seperate= function(band){
  var seperateLetters = wordArr.split("");
  this.lettersArr.push(seperateLetters);
 
  }

  //loop through the letters array
};




module.exports = Letters;

