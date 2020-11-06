$(document).ready(function(){
	$("*").click(function(){
		$(this).animate({fontSize:"16px"},3000);
	});
	$("#textstyle1").click(function(){
		$(this).hide().show(1000);
	});
	$(".textstyle2").click(function(){
		$(this).animate({fontWeight:"800"},3000);
	});
	$("h1").click(function(){
		$(this).hide(1500).show(1500);
	});
	$("h1:first").click(function(){
		$(this).animate({fontSize:"32px"},3000);
	});
	$("span:last").click(function(){
		$(this).fadeOut(1500).fadeIn(1500).css({color:"orange"});
	});
	$("span:even").click(function(){
		$(this).slideUp(1500).slideDown(1500).css({color:"red"});
	});
	$("span:odd").mouseover(function(){
		$(this).css({color:"green"});
	});
	$("span:first-child").mouseenter(function(){
		$(this).css({fontStyle:"italic"});
	});
	$("span:last-child").click(function(){
		$(this).animate({marginLeft:"40px"},200);
		$(this).animate({marginLeft:"0px"},200);
	});
	$("span:first-of-type").click(function(){
		$(this).wrapInner("<del></del>");
	});
	$("span:last-of-type").click(function(){
		$(this).wrapInner("<b></b>");
	});
	$("p:nth-child(1)").click(function(){
		$(this).append("<span> fuck you!</span>");
	});
	$("p:nth-last-child(2)").click(function(){
		$(this).prepend("<span> fuck you!</span>");
	});
	$("span:nth-of-type(1)").click(function(){
		$("<span> Hello </span>").prependTo(this);
	});
	$("span:nth-last-of-type(1)").one("click",function(){
		$("<span> Bye </span>").appendTo(this);
	});
	$("span:only-child").one("click",function(){
		$("<span> Boy </span>").appendTo(this);
	});
	$("span:only-of-type").one("click",function(){
		$("h1").remove();
	});
	$("#textstyle1>p").one("click",function(){
		$("h1").remove();
	});
	$("#textstyle1 p").click(function(){
		$("this").removeClass("h1");
	})
	$("#textstyle1 ~ div").click(function(){
		$("h1").remove("h1");
	})
	$(".textstyle p : eq(0)").click(function(){
		$("h1").remove("h1");
	})
	$(".textstyle p : gt(0)").click(function(){
		$("h1").remove("h1");
	})
	$(".textstyle p : lt(1)").click(function(){
		$("h1").remove("h1");
	})
})