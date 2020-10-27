window.onload=function(){
  setInterval(clock,1000);
  function clock(){
    var aimg=document.getElementsByTagName('img');
    var odate=new Date(); 
    var time =odate.toTimeString().slice(0,8).replace(/\:/g,"");
        for(var i=0;i<aimg.length;i++){
                aimg[i].src='images/'+time.charAt(i)+'.png';
        }
    }
	clock();
};
