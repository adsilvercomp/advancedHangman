
//require word js file
var Letters = require("./letter.js");
var inquirer = require("inquirer");

//create a prompt with a series of questions


var firstWord = new Letters("the beatles");





//this array will hold all of the user's wrong guesses
var wrongArr = [];
//this array will hold all of the user's coorect guesses
var blanksCorrectArr = [];
//this counter will decrement every time the user gets a guess incorrect
var guessesLeft = 10;


// console.log(firstWord.lettersArr);
//inquirer should prompt user for guess.

var askQuestion = function(){
if(guessesLeft > 0 ){

inquirer.prompt([
    {
        name: "guess",
        message: "guess a letter."
    }
]).then(function (response) {
    var uGuess = response.guess;
    console.log("uGuess:" + uGuess);


    //loop through firstWord.lettersArr, if the guessed letter is in the arr, push it to the blanksCorrect word arr
    //else push it to the incorrect word arr

    for (var x = 0; x < firstWord.lettersArr.length; x++) {
        blanksCorrectArr.push("_");
    }
    console.log(blanksCorrectArr);

    function checkLetter() {
        //create a boolean for whether the letter is in the word
        var correctLetter = false;



       
        for (var i = 0; i < firstWord.lettersArr.length; i++) {
            //if the user's guess === a letter in the word at a particular iteration
            //print it in the blanksCorrectArr at the same iteration.
            if (uGuess === firstWord.lettersArr[i]) {
                correctLetter = true;
                console.log(correctLetter);
                blanksCorrectArr[i] = uGuess;
        
               
            }
        }
            if(correctLetter===false){
                wrongArr.push(uGuess);
                guessesLeft-=1;
                console.log("guessesLeft: " + guessesLeft);
                console.log("Wrong Array: " +wrongArr);
            }

        console.log(blanksCorrectArr);

    }

    checkLetter();

   
    askQuestion();

});


}else{
    console.log("game over");
}

};

askQuestion();



