//set array

var musicians = [
    "hankmobley",
    "johncoltrane",
    "theloniusmonk",
    "leemorgan",
    "sunra",
    "ornettecoleman",
    "doncherry",
    "pharoahsanders",
    "alicecoltrane"
];

//set vars
var blankLetters = 0;
var nameChoice = "";
var musicianLetters = [];
var wins = 0;
var losses = 0;
var letters = 0;

//game
function wordGuess() {
    nameChoice = musicians[Math.floor(Math.random() * musicians.length)];
    letters = nameChoice.split("");
    blankLetters = letters.length;

    for (var i = 0; i < blankLetters; i++) {
        musicianLetters.push("_");
        document.getElementById("musicianname").innerHTML = "  " + musicianLetters.join("  ");
    }
}

