var url = 'https://api.pixivweb.com/api.php?return=json';
var puts = ""

$(document).ready(function() {
    putImage();
});

function putImage() {
    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        async: false
    });
    $.ajax({
        url: url,
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