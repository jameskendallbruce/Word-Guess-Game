
// here's what I'd use if I can't get my vanilla JS to work for me.
// $(document).ready(function() {


// and here's my attempt. Which works!!
document.addEventListener("DOMContentLoaded", function() {

// Basic function for logging arrays. (Just in case)
function logArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }  
}

// Our array of possible answers. Converted Marvel to all Caps to make comparison easier (and because it feels right for Hangman)
var Marvel = [
    "CAPTAINAMERICA",
    "IRONMAN",
    "THOR",
    "HULK",
    "BLACKWIDOW",
    "HAWKEYE",
    "SCARLETWITCH",
    "QUICKSILVER",
    "VISION",
    "WARMACHINE",
    "FALCON",
    "BLACKPANTHER",
    "SPIDERMAN",
    "ANTMAN",
    "DOCTORSTRANGE",
    "STARLORD",
    "GAMORA",
    "DRAX",
    "ROCKET",
    "GROOT",
    "MANTIS",
    "NEBULA"]


// This is key to makign sure that nothing happens out of turn.
var gameStarted = false;

// // This is how the computer will choose the answer to be guessed.
var answer = Marvel[Math.floor(Math.random() * Marvel.length)];

// It then replaces the guess with "_" for each letter space.
var answerArray = [];

// Set's number of correct guesses remain for the player to win.
var remainingLetters = answerArray.length;

// where we store the user's guesses
var userInputs = [];

// how many gueses can the user make before losing.
var remainingGuesses = 6;

// a constant to reference for updating remaining guesses.
const totalguesses = 6;

// these will populate the guess-box
var wrongGuesses = [];

// score count. starts at zero.
var wins = 0; 


// To reference that the blanks and answer line up.
console.log("Answer: " + answer);

// Starts the game
function playGame() {

    // turns the game on
    gameStarted = true;

    // chooses the word
    answer = Marvel[Math.floor(Math.random() * Marvel.length)];

    // just here to check on the selected word.
    console.log("New answer: " + answer);  

    // creates the blanks
    for (var i = 0; i < answer.length; i++) {
        answerArray[i] = " _";
    }

    // empties where the blanks go in the HTML
    document.getElementById("letter-blanks").innerHTML = "";

    // places the blanks
    for (var i = 0; i < answerArray.length; i++) {
        
        document.getElementById("letter-blanks").innerHTML += answerArray[i];
    
    }

    

}    

// Checking win parameters

function checkWin() {
    
    // checks for any remaining blanks
    if(!answerArray.includes(" _")) {

        console.log("WIN!");
        
        // You won!!
        document.getElementById("hangman").src = "assets/images/win.jpg";
        
        // updates your score
        wins++;
        
        document.getElementById("score").textContent = "WINS: " + wins;
    
    }
};

function checkLose() {

    // checks if you used up all 6 guesses.
    if(wrongGuesses.length >= 6) {

        console.log("LOSE!");
        
        // YOU LOSE!!
        document.getElementById("hangman").src = "assets/images/" + answer + ".jpg";

    }

}

// Resets the game to empty variables, arrays and values.
function resetGame() {
    console.log("Resetting");

    // Reset variables
    remainingGuesses = 6;

    answer = "";

    // Clear arrays
    userInputs = [];
    
    answerArray= [];

    wrongGuesses = [];


    // Default image
    document.getElementById("hangman").src = "assets/images/0.jpg";

    // rebuild the array of blank letters
    for (var i = 0; i < answer.length; i++) {
        answerArray.push(" _");
    }

    // Show display and turn the game on.
    playGame();
    updateDisplay();
};

// Start button
document.getElementById("start").onclick = playGame;

// Reset button
document.getElementById("reset").onclick = resetGame;

logArray(answerArray);

// Updates the hangman image as you lose more.
function updateHangmanImage() {

    document.getElementById("hangman").src = "assets/images/" + (totalguesses - remainingGuesses) + ".jpg";
    

};



// key presses determining the game inputs
document.onkeydown = function(event) {

    // confirming that the game is on
    if(gameStarted === true) {
    
        // Searching for input parameters a-z (stole this verbage from the internet of course)
        if(event.keyCode >= 65 && event.keyCode <= 90) {
    
            // assigns upper case to guesses to compare
            guessLetter(event.key.toUpperCase());
        }
    
    }

}

// comparing the letter to the exisitng guessed letters.
function guessLetter(letter) {

    // confirming game on first
    if(gameStarted === true) {

        // checking remaining guesses.
        if (remainingGuesses > 0) {

            // have we guessed this yet
            if (!userInputs.includes(letter)) {

                userInputs.push(letter);

                // runs the compare function with the selected letter
                compare(letter);
            }
        }

        //these 3 are self-explanatory.
        updateDisplay();
        
        checkWin();

        checkLose();

    }

};

//  Updates the display on the HTML Page
function updateDisplay() {

    if(gameStarted === true) {
    
        document.getElementById("letter-blanks").innerText = "";
    
        for (var i = 0; i < answer.length; i++) {
            
            document.getElementById("letter-blanks").innerText += answerArray[i];
        }
        
        document.getElementById("bad-guesses").innerText = wrongGuesses;
    }
};


// comparing the guessed letters to the chosen word.
function compare(letter) {

    if(gameStarted === true) {

        // every occurence of a letter in the chosen word string
        var positions = [];


        // Loop through word finding all instances of guessed letter, store the indicies in an array.
        console.log("Answer still " + answer + "?");
    
        for (var i = 0; i < answer.length; i++) {
 
            // turned off for useful for making sure the input letter and the characters are actually being
            //console.log("Checking " + answer.charAt(i) + " against " +letter);
            
            // do any letters match the input
            if (answer.charAt(i) === letter) {

                console.log("Found!");
            
                // push their index position
                positions.push(i);

            }

            // no matches?
            if (!answer.includes(letter)) {

                // was it already guessed?
                if(!wrongGuesses.includes(letter)) {
                
                    // add it to the wrong guesses (doubles as the losing tracker. 6 wrong guesses=game over)
                    wrongGuesses.push(letter);

                }

            }
    
        }

        // update the hangman according to the negative guesses.
    
        if (positions.length <= 0) {
        
            remainingGuesses--;
        
            updateHangmanImage();
    
        } else {
        
            // find all the matches and replace with the real letter (rather than a _)
        
            for(var i = 0; i < positions.length; i++) {
            
                answerArray[positions[i]] = letter;
        
            }
    
        }

    }

};


logArray(Marvel);

logArray(answerArray);

logArray(remainingLetters);

logArray(userInputs)

});