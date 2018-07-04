
// Global variables ============================================================================================================
var wordBank = 'spoons are better for ice cream';
var guessesRemaining = 9;
var incorrectGuesses = 0;
var keysPressedDictionary = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
    ' ': true
    };


// function to display the key pressed withn the console (temp test)- success

document.onkeyup = function(event) {
    console.log(event.key);
    
    // assigning event.key to a new local variable called userGuess
    var userGuess = event.key;
    if(event.keyCode >= 65 && event.keyCode <=90) {
        keysPressedDictionary[userGuess] = true;
        var keysGuessedsofar = "";
        for (var key in keysPressedDictionary) {
            if (keysPressedDictionary[key]) {
                if (key !== ' ')
                keysGuessedsofar += key + ",";
            }
        }
    }
        


    // display the key pressed on the screen
    $("p.keysGuessed").text(keysGuessedsofar);

    displayPhrase();
}

function displayPhrase() {
    var phrase = "";
    for (i = 0; i < wordBank.length; i++) {
        if (keysPressedDictionary[wordBank[i]]) {
            phrase += wordBank[i]+ " ";
        } else { 
            phrase += "_ ";
        }
    }
    
    $("p.phrase").text(phrase);
}



