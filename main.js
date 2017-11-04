
//require word js file
var Letters = require("./letter.js");
var Word = require("./word.js");
var inquirer= require("inquirer");

//create a prompt with a series of questions
var firstWord = new Letters("the beatles");
console.log(Letters.addWord);
// console.log(Letters.wordArr);

 firstWord.seperate();
 console.log(Letters.lettersArr);

    //inquirer should prompt user for guess.
inquirer.prompt([
{
type:"input",
message:"guess a letter.",
name: "guess"
}
]).then(function(inquirerResponse){
    console.log(name);
    //loop through the length of lettersArr
    for(var i; i<lettersArr.length;i++){
        //if userGuess is equal to any of the letters in the letters array, push those letters to the correct array.
        if("guess".toLowerCase===lettersArr[i]){
            var position= 
            correctArr.push(name);
        }else{
            //push the wrong guess to the wrong array.
            wrongArr.push(name)
            //decrement the number of guesses that the user has left. 
            Letters.guessesLeft--;
        }
        
    }

    
});

console.log(firstWord);
console.log(firstWord.wordArr[1]);





