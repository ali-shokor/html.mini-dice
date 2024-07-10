var random1 = Math.floor(Math.random() * 6) + 1;

var firstimg = "./images/dice" + random1 + ".png";

var random2 = Math.floor(Math.random() * 6) + 1;

var secondimg = "./images/dice" + random2 + ".png";

var image1 = document.querySelector(".img1");

image1.setAttribute("src", firstimg);

var image2 = document.querySelector(".img2");

image2.setAttribute("src", secondimg);

if (random1 > random2){
    document.querySelector("h1").innerHTML = "Player1 one";
}
else if (random1 < random2){
    document.querySelector("h1").innerHTML = "Player2 one";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}