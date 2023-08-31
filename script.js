let randomNumber1=Math.floor(Math.random()*6+1);
let randomNumber2=Math.floor(Math.random()*6+1);

//Selecting random images
let randomImage1= randomNumber1+ ".png";
let randomImage2= randomNumber2+ ".png";

//Accessing the images using DOM
let image1=document.getElementById("img-1");
let image2=document.getElementById("img-2");

//Accessing the image attributes.
image1.setAttribute("src",randomImage1);
image2.setAttribute("src",randomImage2);


//Conditional statement

if (randomNumber1>randomNumber2) {
    document.getElementById("result").innerHTML="Awaab Wins!!";
    document.getElementById("body").style.backgroundImage=url("firecrack.gif");
}
else if (randomNumber1<randomNumber2) {
    document.getElementById("result").innerHTML="Mazen Wins!!";
}
else if (randomNumber1==randomNumber2) {
    document.getElementById("result").innerHTML="It's a DRAW";

}