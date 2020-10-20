var myFun = (a, b) => {
    alert(a.value+" "+b.value);
	document.getElementsByTagName("span")[0].style.display = "none";
	document.getElementsByTagName("span")[1].style.display = "none";
}
window.addEventListener("load" , () => {
    var oInput = document.getElementsByTagName("input");
    var oBtn = document.getElementsByTagName("button")[0];
    oBtn.onclick = () => {
        myFun(oInput[0], oInput[1]);
    }
})
  