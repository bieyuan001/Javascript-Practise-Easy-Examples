//fillStyle, strokeStyle, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, globalAlpha
//createLinearGradient, createPattern, creatRadialGradient, addColorStop
//lineCap, lineJoin, lineWidth, miterLimit
//Rectangle: rect, fillRect, strokeRect, clearRect
//Path: fill, stroke, beginPath, moveTo, closePath, lineTo, clip, quadraticCurveto, bezierCurveTo, arc, arcTo, isPointInPath
//scale, rotato, translate, transform, setTransform
//Text: font, fontAlign, textBaseline, fillText, strokeText, measureText
//Image: drawImage
//width, height, date, creatImageDate, getImageDate, putImageDate, globalCompositeOperation
var canvas = document.getElementById("myCon");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,200,100);
canvas.onclick = function(){
	"use strict"
	ctx.fillStyle = "#ffee00";
	ctx.strokeStyle = "#000000";
	ctx.shadowBlur = 20;
	ctx.shadowColor = "#000000";
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 10;
	ctx.globalAlpha = 0.2; //Looks like opacity
	ctx.fillRect(75,25,50,50);
	ctx.lineWidth = 5;
	ctx.strokeRect(75,25,50,50)
}