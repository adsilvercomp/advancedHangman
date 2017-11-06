
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


console.log(firstWord.lettersArr);
//inquirer should prompt user for guess.
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



        //check if the letter is in the word
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

    // for(var i=0;i<firstWord.lettersArr.length; i++){
    //     var iterate= firstWord.lettersArr[i];
    //     if(response.guess===iterate){
    //         correctArr.push(response.guess);
    //         console.log(correctArr);
    //     }else{
    //         wrongArr.push(response.guess);
    //         guessesLeft--;
    //         console.log(guessesLeft);
    //         console.log(wrongArr);
    //     }
    // }


    //     //loop through the length of lettersArr
    //     for(var i; i<lettersArr.length;i++){
    //         //if userGuess is equal to any of the letters in the letters array, push those letters to the correct array.
    //         if("guess".toLowerCase===lettersArr[i]){
    //             var position= 
    //             correctArr.push(name);
    //         }else{
    //             //push the wrong guess to the wrong array.
    //             wrongArr.push(name)
    //             //decrement the number of guesses that the user has left. 
    //             Letters.guessesLeft--;
    //        }

    //    }


});







