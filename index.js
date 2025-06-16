var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceimg="dice"+randomNumber1+".png";
var randimg="images/"+randomDiceimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimg);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randimg2="images/dice"+randomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randimg2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(randomNumber2>randomNumber1){
     document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
     document.querySelector("h1").innerHTML="draw!";
}
