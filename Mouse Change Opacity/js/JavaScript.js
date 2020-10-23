window.onload = function () {
    var getLi = document.getElementsByTagName("li");

    for (var i in getLi) {
        getLi[i].onmouseover = function () {
            this.style.opacity = "1";
        }
        getLi[i].onmouseout = function () {
            this.style.opacity = "0.4";
        }
    }
    
}

