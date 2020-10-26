window.onload=function(){
  setInterval(clock,1000);
  function clock(){
    var aimg=document.getElementsByTagName('img');
    var odate=new Date(); 
    var time =String(odate.getHours()).padStart(2,"0")+String(odate.getMinutes()).padStart(2,"0")+String(odate.getSeconds()).padStart(2,"0");
        for(var i=0;i<aimg.length;i++){
                aimg[i].src='images/'+time.charAt(i)+'.png';
        }
    }
	clock();
};
