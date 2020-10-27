 window.onload=function(){
        var obtn1=document.getElementById('btn1');
        var obtn2=document.getElementById('btn2');
        var ach=document.getElementById("div1").getElementsByTagName('input');
        obtn2.onclick=function(){
            for(var i=0;i<ach.length;i++){
                if(ach[i].checked==true){
                    ach[i].checked=false;
                }else {
                    ach[i].checked=true;
                }
            }

        };

        obtn1.onclick=function(){

            for(var i=0;i<ach.length;i++){
                ach[i].checked=true;
            }
            
        };

};// JavaScript Document