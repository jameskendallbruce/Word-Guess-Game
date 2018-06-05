
// here's what I'd use if I can't get my vanilla JS to work for me.
// $(document).ready(function() {


// and here's my attempt. Which works!!
document.addEventListener("DOMContentLoaded", function() {

// Basic function for logging arrays.
function logArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }  
}

// Marvel will be our array that potential answers are chosen from.
var Marvel = [
    "Captain America",
    "Iron Man",
    "Thor",
    "Hulk",
    "Black Widow",
    "Hawkeye",
    "Scarlet Witch",
    "Quicksilver",
    "Vision",
    "War Machine",
    "Falcon",
    "Black Panther",
    "Spider-man",
    "Ant-man",
    "Doctor Strange",
    "Star-Lord",
    "Gamora",
    "Drax",
    "Rocket",
    "Groot",
    "Mantis",
    "Nebula"];

// wins and losses will keep track of overall score between games
var wins = 0;

var losses = 0;

// This variable is to keep track of incorrect guesses.
var wrong = 0;

// This is how the computer will choose the answer to be guessed.
var answer = Marvel[Math.floor(Math.random() * Marvel.length)];

// It then replaces the guess with "_" for each letter space.

var answerArray = [];
        
for (var i = 0; i < answer.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = answer.length;

var userInputs = [];

var wrongGuesses = [];



document.getElementById("blanks").textContent = answerArray;


// not sure if I can get elements by id right now. still looking.
// var results = document.getElementById("blanks");

// document.getElementById("game-time").onclick = function() {myFunction()};


// for some reason, no click events want to work. wtf
function myFunction() {
    document.getElementById("game-time").textContent = "YOU CLICKED ME!";
}
myFunction;

 // // this is my real-ish code that is giving me some trouble...

// document.getElementById("game-time").onclick = function gameStart()

// function gameStart() {
//     for (var i = 0; i < answerArray.length; i++) {
//     document.getElementById("blanks").innerHTML = answerArray[i];
//     }
// }






logArray(Marvel)

logArray(answer);

logArray(answerArray);

logArray(remainingLetters);

});