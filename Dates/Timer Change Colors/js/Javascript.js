//Javascript
/*
window.onload = function(){
	document.getElementById("timer").innerHTML = new Date().toTimeString().slice(0,8);
	var a = setInterval(myFunction,1000);
	function myFunction(){
		var newTimer = document.getElementById("timer");
		var fullToday = new Date();
		newTimer.innerHTML = String(fullToday.getHours()).padStart(2,"0")+":"+String(fullToday.getMinutes()).padStart(2,"0")+":"+String(fullToday.getSeconds()).padStart(2,"0");
		var r = Math.round(Math.random()*255).toString(16);
		var g = Math.round(Math.random()*255).toString(16);
		var b = Math.round(Math.random()*255).toString(16);
		newTimer.style.color = "#"+r+g+b;
		}
	window.onclick = function(){
			clearInterval(a);
	}
}
*/

//jQuery
var s = setInterval(myFunction,1000);
function myFunction(){
	var c = new Date().toTimeString().slice(0,8);
	var r = Math.round(Math.random()*255).toString(16);
	var g = Math.round(Math.random()*255).toString(16);
	var b = Math.round(Math.random()*255).toString(16);
	$("#timer").text(c);
	$("#timer").css({color: "#"+r+g+b});
}
$("document").ready(function(){
	$("#timer").click(function(){
		clearInterval(s);
	})
})