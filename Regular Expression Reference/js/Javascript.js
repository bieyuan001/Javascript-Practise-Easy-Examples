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
})// JavaScript Document