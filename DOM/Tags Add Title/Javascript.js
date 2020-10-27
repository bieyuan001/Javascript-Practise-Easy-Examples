var getTagp = document.getElementsByTagName("p");
for(i=0; i<getTagp.length; i++){
	getTagp[i].onmouseover = function(){
		var typ = document.createAttribute("title");
		typ.value = "luckydesigner";
		this.attributes.setNamedItem(typ);
	}
}