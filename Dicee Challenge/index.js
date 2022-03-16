


randomNumber1 = Math.floor(Math.random() * 6 + 1);
randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelectorAll("img")[1];

dice1.setAttribute("src", randomImageSource1);
dice2.setAttribute("src", randomImageSource2);

var titleWinner = document.querySelector("h1")

if (randomNumber1 > randomNumber2) {
   titleWinner.innerHTML = "Player 1 Wins! 🎉 ";
} 
else if (randomNumber2 > randomNumber1) {
   titleWinner.innerHTML = "Player 2 Wins! 🎉 ";
}
else {
   titleWinner.innerHTML = "Draw!";
}


