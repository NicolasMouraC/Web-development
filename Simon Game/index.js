var gamePattern = [];
var userClickPattern = [];
var buttonsArray = ['red', 'blue', 'green', 'yellow'];
var level = 0;
var isGameOn = false;
var randomChosenColour = '';

// Starts the game
function startOver(){
    level = 0;
    gamePattern = [];
    isGameOn = false;
}

// Returns a random number
function randomNumber(){
    return Math.floor((Math.random() * 3) + 1); 
};

// Returns a random color
function nextSequence(){
    userClickPattern = [];
    level++;
    $('#level-title').text('Level ' + level);
    randomChosenColour = buttonsArray[randomNumber()];
    gamePattern.push(randomChosenColour);
    
    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/' + randomChosenColour + '.mp3');
    audio.play()
};

// Checks answer
function checkAnswer(currentLevel){
    if (userClickPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        var audio = new Audio('sounds/wrong.mp3');
        audio.play()
        $('body').addClass('game-over');
        $('#level-title').text('Game Over, Press Any Key To Restart');
        setTimeout(function() {
            $('body').removeClass('game-over');
        }, 200);

        startOver();
    }
}
// Detects a pressed key
$(document).keydown(function (e) {
    if (isGameOn == false){
        $('#level-title').text('Level ' + level);
        nextSequence();
        $('#' + randomChosenColour).fadeOut(100).fadeIn(100);
        isGameOn = true;
    };
});

// Detects a click in a button
$('.btn').click(function (e) {
    $('#' + e.target.id).fadeOut(100).fadeIn(100);

    var audio = new Audio('sounds/' + e.target.id + '.mp3');
    audio.play();

    userClickPattern.push(e.target.id);
    checkAnswer(userClickPattern.length-1)
});

