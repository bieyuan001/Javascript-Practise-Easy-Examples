//Javascript
/*
var toClick = document.getElementsByClassName("accordion");
	for(var i=0; i<toClick.length; i++){
		toClick[i].addEventListener("click", function(){
			var panel = this.nextElementSibling;
			panel.style.display === "block" ? panel.style.display = "none" : panel.style.display = "block";
	})
}
*/

$("button").click(function(){
	$(this).next().slideToggle();
})
