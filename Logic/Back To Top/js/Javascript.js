//Javascript
/*
var getTop = document.getElementById("top");
window.onscroll = function(){
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 30) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    //Click event to scroll to top
    $('#top').click(function(){
        $('html, body').animate({scrollTop : 0},300);
    });
    
});