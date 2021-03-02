var url = 'https://api.pixivweb.com/api.php?return=json';
var proxy = 'https://cors-anywhere.herokuapp.com/';
var puts = ""

$(document).ready(function() {
    putImage();
});

function putImage() {
    $.ajax({
        url: proxy + url,
        headers: {
            'Content-Type': 'text/json;charset=UTF-8',
        },
        type: "GET",
        dataType: "json",
        data: {},
        success: function(result) {
            puts += result["imgurl"];
            console.log(puts);
            document.getElementById("demo").innerHTML += "<img src=" + puts + ">";
        },
        error: function() {
            console.log("error");
        }
    });
}