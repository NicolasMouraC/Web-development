const elements = document.querySelectorAll(".drum");

function checkInput(btn){
    switch (btn) {
        case "w":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            break;
    }
}

elements.forEach(element => {
    element.addEventListener("click", function(){
        var btn = this.innerHTML;
        checkInput(btn);
        buttonAnimation(btn);
    })
})
document.addEventListener("keydown", function(event){
    checkInput(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(key){
    var currentKey = document.querySelector('.' + key);
    currentKey.classList.add("pressed");
    setTimeout(function(){
        currentKey.classList.remove('pressed')
    }, 100)
}