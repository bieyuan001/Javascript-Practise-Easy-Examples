//Javascript
/*
var getMon = document.getElementById("subm");
	var get=document.getElementById("month");
	get.addEventListener("keyup", function(){
		let month = ["1","2","3","4","5","6","7","8","9","10","11","12"];
		if(month.some(x=>this.value===x)){
			this.value;
		}else{
			this.value = "";
			alert("You must input from 1 to 12 any numbers")
		}
	})
	getMon.addEventListener("click", function(){
		var month31 = ["1","3","5","7","8","10","12"];
		var month30 = ["4","6","9","11"]
		if(month31.some(x => get.value===x)){
	    alert("This month has 31 days");}
		else if(month30.some(x => get.value===x)){
		alert("This month has 30 days");}
	    else {alert("This month has 28 days");}
})
*/

//jQuery
	$("#subm").click(function(){
		var act = Number($("input:eq(0)").val());
		alert("hhh");
	})