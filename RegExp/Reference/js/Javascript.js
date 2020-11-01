//Javascript
/*
var getTop = document.getElementsByClassName("retop")[0];
window.onscroll = function(){
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    getTop.style.display = "block";
  } else {
    getTop.style.display = "none";
  }
}
getTop.addEventListener("click", function(){
	document.body.scrollTop = 0;//Safari to use.
	document.documentElement.scrollTop = 0;//Chrome, Firefox, Internet Explore and Opra.
})
*/

//jQuery
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>=30){
			$(".retop").fadeIn();
		}else{
			$(".retop").fadeOut();
		}
	})
	$(".retop").click(function(){
		$("html, body").animate({scrollTop:0},200);
	})
})

