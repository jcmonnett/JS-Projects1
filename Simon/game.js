

//Initialized data for first run.
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var numberOfButtons = $(".btn").length;
var userClickedPattern = [];
var started = false;
var level = 0;


//Checks for keypress, then checks to see if it is start. If not started, it changes the title to Level 0
$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("Level  " + level);
        nextSequence();
        started = true;
    }
});


// On Click, play a sound and animate it.
$( ".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

// Plays a sound when button is selected.
function playSound(name) {
    var audio = new Audio("sounds/" + name +  ".mp3");
    audio.play();
}


// Animate the buttons to flash.
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Check to make sure computer pattern matches user's pattern. 
//If correct, move to next sequence. If incorrect, play wrong answer sound and run startOver function.

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
         if (userClickedPattern.length === gamePattern.length){
             setTimeout(function () {
                 nextSequence();
             }, 1000);
         }
    }
    else {
        $("body").addClass("game-over");
        var wrongAnswer = new Audio("sounds/wrong.mp3");
        wrongAnswer.play();
        $("h1").text("Game Over, Press any key to restart.")
        setTimeout( function () {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
       

    }


}
// Reset values after game over.
function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}
 
// Start the game. 
function nextSequence() {
    userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level);
   var randomNumber = Math.floor(Math.random() * 4);
   var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}








