window.onload=function(){
      var oDiv=document.getElementById('div1');
      oDiv.onmouseover=function(){
           startmove(100);
       }
           oDiv.onmouseout=function(){
               startmove(30);
       }
     };
		var a =1;
		var timer = null;
        function startmove(target){
            var speed=0;
            var oDiv=document.getElementById('div1');
            if(a<target){
                speed=1;
            }else{
                speed=-1;
            }
			clearInterval(timer);
            timer=setInterval(function(){
                if(a===target){
                    clearInterval(timer);
                }
                else{
                    a=a+speed;
                    oDiv.style.opacity=a/100;
    }
  },100)
}