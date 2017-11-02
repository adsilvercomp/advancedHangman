// requiring our letter module exported from student.js
var Letter = require("./letter.js");

//Invoke a word
//display dashes in the place of letters in the word
//first create a constructor function for all of the words you plan to use.
//The properties should include an array for the word as well as for, dashes, correct letters, and incorrect letters. 
//Each word should also have a guess counter property set to 10
var Word = function (wordArr, dashesArr, correctArr, incorrectArr, wordLength, guessesLeft) {

  this.wordArr = [];
  this.dashesArr = [];
  this.correctArr = [];
  this.incorrectArr = [];
  this.guessesLeft = 10;

  //there should be an add letter method that adds letters to the word array. 
  this.addLetter = function (letter) {
    this.wordArr.push(new Letter(letter));
  }

  //there should be an add dashes method that adds dashes to the dashes array.
  this.addDashes = function (){
    
  }
  //user guesses a letter
  //if the letter is in the word it replaces a dash
  //else, the wrong letter is displayed and the guess is deducted
  //the user's guess should be a method of the word object
  //if the user's guessed letter is in the word, replace the necessary dashes in the dashes array with the letter. Else, push the the letter to the incorrect letters array and deduct a guess.
  //if the user runs out of 10 guesses, they lose
  //if the user guesses the entire word, the win counter is incremented and a new word is displayed.(The win counter should be a global variable).

 // this.userGuesses = function () {
    // for (var x = 0; x < wordArr.length; x++) {
    //   if (wordArray[i] === guess) {
    //       console.log("this is correct");
    //  }
    //}
 // }
}

module.exports = Word;










// a method that creates a student using our Student constructor.
// It then pushes the new student object to this.students and updates this.numStudents
// this.addLetter = function (letter) {
//   this.students.push(new Student(x, y, z));
// };
// // this method will tell you how many students are in the class
// this.studentCount = function () {
//   return this.students.length;
// };
// };

// // exporting our Classroom constructor. We will require it in main.js
// module.exports = Classroom;


