
//require word js file
var Letters = require("./letter.js");
var Word = require("./word.js");
var inquirer= require("inquirer");

//create a prompt with a series of questions
var firstWord = new Letters("the beatles");



console.log(firstWord.lettersArr);
    //inquirer should prompt user for guess.
inquirer.prompt([
{
name: "guess",
message:"guess a letter."
}
]).then(function(response){
    console.log(response.guess);


//this array will hold all of the user's wrong guesses
var wrongArr=[];
//this array will hold all of the user's coorect guesses
var correctArr=[];
//this counter will decrement every time the user gets a guess incorrect
var guessesLeft=10;

//loop through firstWord.lettersArr, if the guessed letter is in the arr, push it to the correct word arr
//else push it to the incorrect word arr
for(var i=0;i<firstWord.lettersArr.length; i++){
    var iterate= firstWord.lettersArr[i];
    if(response.guess===iterate){
        correctArr.push(response.guess);
        console.log(correctArr);
    }else{
        wrongArr.push(response.guess);
        guessesLeft--;
        console.log(guessesLeft);
        console.log(wrongArr);
    }
}


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







