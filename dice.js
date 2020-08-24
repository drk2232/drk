
var dice1 = Math.floor(Math.random() * 6) + 1;

var locdice = "images/dice" + dice1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , locdice);

var dice2 = Math.floor(Math.random() * 6) + 1;

var locdice1 = "images/dice" + dice2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src" , locdice1);



if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (dice2 > dice1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
