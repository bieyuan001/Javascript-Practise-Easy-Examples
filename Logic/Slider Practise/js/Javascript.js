//Javascript
/*
const btn = document.getElementById('btn');
const content = document.getElementById('content');
var i = 0;
btn.addEventListener('click', () => {
     if (i === 0) {
          content.style.left = 0;
          content.style.position = 'relative';
          i++;
     } else {
          content.style.left = -340 + 'px';
          content.style.position = 'absolute';
          i--;
        }
})
*/

//jQuery
$("button").click(function(){
	$("#content").toggle();
})