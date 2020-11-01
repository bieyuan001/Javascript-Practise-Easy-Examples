//Javascript
/*var element = document.getElementById("cra");
element.onclick=function(){
	var para = document.createElement("p");
	var node = document.createTextNode("Hello Third");
	var pren = document.getElementsByTagName("p")[0];
	para.appendChild(node);
	this.appendChild(para);
	this.insertBefore(para,pren);
}
*/

//jQuery
$("document").ready(function(){
	$("#cra").click(function(){
		var text1 = "<p>Hello Third</p>";
		var text2 = $("<p></p>").text("Hello Fourth");
		$(this).append(text1,text2);
		//$(this).prepend(text1,text2);
	})
})