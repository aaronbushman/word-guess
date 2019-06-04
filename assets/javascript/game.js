//set array

var musicians = [
    "hankmobley",
    "johncoltrane",
    "theloniousmonk",
    "leemorgan",
    "sunra",
    "ornettecoleman",
    "doncherry",
    "pharoahsanders",
    "alicecoltrane"
];

var blankLetters = 0;
var nameChoice = "";
var musicianLetters = [];
var correctGuesses = [];
var wrongGuesses = [];
var wins = 0;
var losses = 0;
var letters = 0;
var guessesLeft = nameChoice.length + 3;

function gameStart() {
    nameChoice = musicians[Math.floor(Math.random() * musicians.length)];
    letters = nameChoice.split("");
    blankLetters = letters.length;

    for (var i = 0; i < blankLetters; i++) {
        musicianLetters.push("_");
        document.getElementById("musicianname").innerHTML = " " + musicianLetters.join(" ");
    }
}
function letterCheck(letter) {
    var wordLetter = false;
    for (var i = 0; i < blankLetters; i++) {
        if (nameChoice[i] == letter) {
            wordLetter = true;
        }
    }

    if (wordLetter) {
        for (var i = 0; i < blankLetters; i++) {
            if (nameChoice[i] == letter) {
                correctGuesses[i] = letter;
            }
        }
    }
    
    else {
        wrongGuesses.push(letter);
        guessesLeft--;
    }
}

function endGame() {
    if (musicianLetters.toString() == correctGuesses.toString()) {
        wins++;
        document.getElementById("wins").innerHTML = " " + wins;
        win();
        } 
    else if (guessesLeft === 0) {
        losses++;
        document.getElementById("youlose").innerHTML = "You lose! Try again?";
        document.getElementById("losses").innerHTML = " " + losses;
    }

    document.getElementById("musicianname").innerHTML = "  " + correctGuesses.join(" ");
    document.getElementById("guessesleft").innerHTML = " " + guessesLeft;
}

function win() {
    if (nameChoice === musician[0]) {
        document.getElementById("image").src = "assets/images/hankmobley.jpg";
    }

    if (nameChoice === musician[1]) {
        document.getElementById("image").src = "assets/images/johncoltrane.jpg";
    }

    if (nameChoice === musician[2]) {
        document.getElementById("image").src = "assets/images/theloniousmonk.jpg";
    }

    if (nameChoice === musician[3]) {
        document.getElementById("image").src = "assets/images/leemorgan.jpg";
    }

    if (nameChoice === musician[4]) {
        document.getElementById("image").src = "assets/images/sunra.jpg";
    }

    if (nameChoice === musician[5]) {
        document.getElementById("image").src = "assets/images/ornettecoleman.jpg";
    }

    if (nameChoice === musician[6]) {
        document.getElementById("image").src = "assets/images/doncherry.jpg";
    }

    if (nameChoice === musician[7]) {
        document.getElementById("image").src = "assets/images/pharoahsanders.jpg";
    }

    if (nameChoice === musician[8]) {
        document.getElementById("image").src = "assets/images/alicecoltrane.jpg";
    }
}



gameStart();

document.onkeyup = function(event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();

    letterCheck(guesses);

    endGame();

    document.getElementById("wrong").innerHTML = " " + wrongGuesses.join(" ");
}   