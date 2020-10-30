//createPattern
//Path: clip, quadraticCurveto, bezierCurveTo, arcTo, isPointInPath
//transform, setTransform
//Text: font, fontAlign, textBaseline, fillText, strokeText, measureText
//Image: drawImage
//width, height, date, creatImageDate, getImageDate, putImageDate, globalCompositeOperation
var canvas = document.getElementById("myCon");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,200,100);
canvas.onmouseover = function(){
	"use strict"
	ctx.fillStyle = "#ffee00";
	ctx.strokeStyle = "#000000";
	ctx.shadowBlur = 20;
	ctx.shadowColor = "#000000";
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 10;
	ctx.rotate(30*Math.PI/180);
	ctx.scale(1.5,1.5);
	ctx.globalAlpha = 0.2; //Looks like opacity
	ctx.clearRect(75,25,50,50);
	ctx.lineWidth = 25;
	ctx.strokeRect(75,25,50,50)
}
canvas.onmouseout = function(){
	"use strict"
	ctx.beginPath();
	ctx.arc(125,50,20,0,Math.PI*2,true);
	ctx.moveTo(0,0);
	ctx.lineTo(20,80);
	ctx.lineTo(70,80);
	ctx.closePath();
	ctx.fillStyle="#00ff00";
	ctx.fill();
}

var canvas2 = document.getElementById("myCradient");
var ctx2 = canvas2.getContext("2d");
var getcol = ctx2.createLinearGradient(0,30,100,100);
getcol.addColorStop(0,"red");
getcol.addColorStop(1,"white");
ctx2.fillStyle = getcol;
ctx2.fillRect(0,0,200,100);
var getcols = ctx2.createRadialGradient(30,30,20,60,60,70);
getcols.addColorStop(0,"yellow");
getcols.addColorStop(1,"blue");
ctx2.globalAlpha = 0.6;
ctx2.fillStyle = getcols;
ctx2.fillRect(0,0,80,99);
ctx2.tanslate(40,40);
ctx2.fillRect(0,0,60,100)

var canvas3 = document.getElementById("myLine");
var ctx3 = canvas3.getContext("2d");
ctx3.beginPath();
ctx3.moveTo(20,20);
ctx3.lineTo(80,80);
ctx3.lineCap="round"; //round and butt also can select
ctx3.lineWidth = 4;
ctx3.stroke();
ctx3.beginPath();
ctx3.lineJoin = "miter"; //bevel and miter also can select
ctx3.miterLimit = 1;
ctx3.moveTo(60,20);
ctx3.lineTo(100,65);
ctx3.lineTo(60,90);
ctx3.lineWidth = 4;
ctx3.stroke();