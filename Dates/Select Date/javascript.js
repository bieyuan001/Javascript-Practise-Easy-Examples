$(document).ready(function() {
    getDateTime();
})

function getDateTime() {
    let getDaysArray = function(start, end) {
        for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };
    let daylist = getDaysArray(new Date("2021-01-01"), new Date());
    let lst = daylist.map((v) => v.toISOString().slice(0, 10)).slice(0, -1).reverse();
    for (let i = 0; i < lst.length; i++) {
        $("#demo").append("<option name='selector' value=\"" + lst[i] + "\" >" + lst[i] + "</option>");
    };
}