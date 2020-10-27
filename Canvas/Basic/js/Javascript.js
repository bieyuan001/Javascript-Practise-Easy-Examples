//Creat a rectangle
var canvas = document.getElementById("first");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFF00";
ctx.fillRect(0,0,350,100);

//Creat a line;
var canvas2 = document.getElementById("second");
var ctx2 = canvas2.getContext("2d");
ctx2.moveTo(0,0);
ctx2.lineTo(200,100);
ctx2.stroke();

//Creat a circle;
var canvas3 = document.getElementById("third");
var ctx3 = canvas3.getContext("2d");
ctx3.beginPath()
ctx3.arc(100,100,100,0,2*Math.PI);
ctx3.stroke();

//Creat a Gradient;
var canvas4 = document.getElementById("fourth");
var ctx4 = canvas4.getContext("2d");
var grd = ctx4.createLinearGradient(0,0,200,0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "orange");
ctx4.fillStyle = grd;
ctx4.fillRect(0, 0, 350, 100);

//Creat a Radial Gradient;
var canvas5 = document.getElementById("fifth");
var ctx5 = canvas5.getContext("2d");
var grd2 = ctx5.createRadialGradient(175,50,50,250,90,75);
grd2.addColorStop(0, "red");
grd2.addColorStop(1, "white");
ctx5.fillStyle = grd2;
ctx5.fillRect(0, 0, 350, 100);

//Creat a text;
var canvas6 = document.getElementById("sixth");
var ctx6 = canvas6.getContext("2d");
ctx6.font = "30px Microsoft Yahei";
ctx6.fillStyle = "#ffee00";
ctx6.textAlign = "center";
ctx6.fillText("Hello World",175,50);

//Creat a stroke text;
var canvas7 = document.getElementById("seventh");
var ctx7 = canvas7.getContext("2d");
ctx7.font = "30px Microsoft Yahei";
ctx7.strokeText("Hello World",10,50);

//Creat a rectangle shadow;
var canvas8 = document.getElementById("eighth");
var ctx8 = canvas8.getContext("2d");
ctx8.shadowBlur = 40;
ctx8.shadowColor = "#000033";
ctx8.fillStyle = "#ffee00";
ctx8.fillRect(50,25,100,50);

//Creat a rectangle stroke
var canvas9 = document.getElementById("ninth");
var ctx9 = canvas9.getContext("2d");
ctx9.strokeStyle = "#FFFF00";
ctx9.strokeRect(50,50,175,50);