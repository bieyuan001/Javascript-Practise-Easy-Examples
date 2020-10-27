var tabs = document.getElementById("tab").getElementsByTagName("li");
var divs = document.getElementById("mc").getElementsByTagName("div");
for (var i = 0; i < tabs.length; i++) {
        tabs[i].onmouseover = function () { change(this); }
    }

function change(obj) {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === obj) {
            tabs[i].className = "tab_selected";
            divs[i].className = "main_selected";
        }
        else {
            tabs[i].className = "";
            divs[i].className = "";
        }
    }
}