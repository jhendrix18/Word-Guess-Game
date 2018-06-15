//  reference to dom elms. ============================================================================================================

// var $newGameButton = getElementById('new-game-button');
var $placeholders = getElementById('placeholders');
var $guessedLetters = getElementById('guessed-letters');
var $guessesLeft = getElementById('guesses-left');
var $wins = getElementById('wins');
var $losses = document.getElementById('losses');


// Global Variables ================================================================================================================================

var wordBank = ['michigan', 'indiana', 'california', 'im really hungry'];
var wins = 0;
var losses = 0; 
var guessesLeft = 0;
var gameRunning = false;
var pickedWord = '';
var pickedwordPlaceholderArr = []; /*set as an array to set a type to the picked placeholder, otherwise wouldn't understand what type of push*/
var guessedLetterBank = [];
var incorrectLetterBank = [];

// Functions:================================================================================================================================

function newGame() {
    // make sure this resets game info for new game
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedwordPlaceholderArr = [];


    // pick a new word- technically the beginnnign of the game?
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // create placeholders out of new picked word. This isn't working..... why??!?!?

    for (var i = 0; i < pickedWord.length; i++) {
        if(pickedWord[i] === ' ') {
            pickedwordPlaceholderArr, push(' ');
        } else {
            pickedwordPlaceholderArr, push('_');
        }
    }

    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = pickedwordPlaceholderArr, join('');
    $guessedLetters.textContent = incorrectLetterBank;

}

// letterGuess function-- checking if the guessed letter is in the word to guess

function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {    
        guessedLetterBank.push(letter);

        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i].toLowerCase[] === letter.toLowerCase()) {
                pickedwordPlaceholderArr[i] === pickedWord[i];
            }
        }

        $placeholders.textContent = pickedwordPlaceholderArr.join('');

    } else {
        if (!gameRunning) {
            alert('the game is not running, click new game button');
        } else {
            alert ('Yo- you guessed that already');
        }
    }    


}

    // check incorrect letter


    // check for a loss


    //check for a win


    //add new game button

    $newGameButton.addEventListener('click', newGame);

    // key event to trigger the actual guess for letters (interesting find, 65 is the key code for A and 90 for Z)
    document.onkeyup = function(event) {
        console.dir(event);
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            letterGuess(event.key);
        }
    }









// for some reason it doesn't like my getElementbyID and I can't seem to get around it...