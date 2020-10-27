window.onload=function(){
        var oBtn1=document.getElementById('btn1');
        var oBtn2=document.getElementById('btn2');
        oBtn1.onclick=function(){
            startmove(400);
        }
        oBtn2.onclick=function(){
            startmove(800);
        }
    }
    var timer=null;
    function startmove(target){
        var oDiv=document.getElementById('div1');
        var speed=0;
        if(oDiv.offsetLeft>target){
            speed=-7;
        }else{
            speed=7;
        }
        clearInterval(timer);
        timer=setInterval(function(){
            if(Math.abs(target-oDiv.offsetLeft)<=7){
                clearInterval(timer);
                oDiv.style.left=target+'px';
            }else{
                oDiv.style.left=oDiv.offsetLeft+speed+'px';
            }
            document.title=oDiv.offsetLeft;
        },30);
}