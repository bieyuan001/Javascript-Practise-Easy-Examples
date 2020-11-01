//Javascript
/*
var element = document.getElementById("cra");
element.onclick=function(){
	var para = document.createElement("p");
	var node = document.createTextNode("Hello Third");
	para.appendChild(node);
	this.appendChild(para);
}
*/

//jQuery
$("document").ready(function(){
	$("#cra").click(function(){
		var text1 = "<p>Hello Third</p>";
		var text2 = $("<p></p>").text("Hello Fourth");
		$(this).append(text1,text2);
	})
})