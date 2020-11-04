$(document).ready(function(){
	$("*").css({color:"red"});// All Elements
	$("#fullElement").click(function(){
		$(this).hide();
	});//id selector
	$(".secondElement").click(function(){
		$(this).fadeToggle(1500);
	});//class selector
	$("span").click(function(){
		$(this).hide(1500);
	});//element selector
	$("span:first").click(function(){
		$(this).show(1500);
	});//element first selector
	$("span:last").click(function(){
		$(this).show(1500).css({color:"blue"});
	});//element last selector
	$("span:even").click(function(){
		$(this).css({fontSize:"26px"});
	});//element even selector
	$("span:odd").click(function(){
		$(this).show(1500).css({fontSize:"4px"});
	});//element odd selector
	$("div:first-child").click(function(){
		$(this).show(1500).css({fontSize:"4px"});
	});//element div first child p selector
	$("p:first-of-type").click(function(){
		$(this).css({backgroundColor:"blue"});
	});
})