var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('img.img1').src = 'images/dice' + num1 + '.png'
document.querySelector('img.img2').src = 'images/dice' + num2 + '.png'

if (num1 > num2){
    document.querySelector('h1').innerText = 'Player 1 wins!';
}else if (num2 > num1){
    document.querySelector('h1').innerText = 'Player 2 wins!';
}else {
    document.querySelector('h1').innerText = 'Draw';
}