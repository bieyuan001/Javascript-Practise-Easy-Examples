//Javascript
/*
var getTagp = document.getElementsByTagName("p");
for(var i=0; i<getTagp.length; i++){
	getTagp[i].onmouseover = function(){
		var typ = document.createAttribute("title");
		typ.value = "luckydesigner";
		this.attributes.setNamedItem(typ);
	}
}
*/

//jQuery
$("document").ready(function(){
	$("p").mouseenter(function(){
		$(this).attr("title",$(this).text());
	})
	$("p").mouseleave(function(){
		$(this).css({color:"red",fontSize:"24px"});
	})
})