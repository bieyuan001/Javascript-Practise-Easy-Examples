//Javascript
/*
var myFun = (a, b) => {
    alert(a.value+" "+b.value);
	document.getElementsByTagName("span")[0].style.display = "none";
	document.getElementsByTagName("span")[1].style.display = "none";
}
window.addEventListener("load" , () => {
    var oInput = document.getElementsByTagName("input");
    var oBtn = document.getElementsByTagName("button")[0];
    oBtn.onclick = () => {
        myFun(oInput[0], oInput[1]);
    }
})
*/

//jQuery
$(document).ready(function(){
	$("input:eq(0)").focus(function(){
		$("span:eq(0)").css({display:"none"});
		$("input:eq(0)").blur(function(){
			if($(this).val()===""){$(this).focus()} 
		})
	})
	$("input:eq(0)").blur(function(){
		if($(this).val()===""){$("span:eq(0)").css({display:"block"});}
		else{$("span:eq(0)").css({display:"none"});}
	})
	$("input:eq(0)").keyup(function(){
		/\d$/.test($(this).val())? $(this).val() : this.value="";
	})
	$("input:eq(1)").focus(function(){
		$("span:eq(1)").css({display:"none"});
		$("input:eq(1)").blur(function(){
			if($(this).val()===""){$(this).focus()} 
		})
	})
	$("input:eq(1)").blur(function(){
		if($(this).val()===""){$("span:eq(1)").css({display:"block"});}
		else{$("span:eq(1)").css({display:"none"});}
	})
	$("input:eq(1)").keyup(function(){
		/\d$/.test($(this).val())? $(this).val() : this.value="";
	})
	$("button").click(function(){
		alert(Number($("input:eq(0)").val())+Number($("input:eq(1)").val()));
		$("input:eq(0)").val("");
		$("input:eq(1)").val("");
		$("span").css({display:"block"});
	})
})
  