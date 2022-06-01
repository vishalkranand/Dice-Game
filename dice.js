var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;
var randomImage = "dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage) ;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;
var randomImage2 = "dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2) ;

if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML ="PLAYER 2 WINS";
    
}
else if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML ="PLAYER 1 WINS";

}
else{
    document.querySelector("h1").innerHTML ="DRAW!";

}


