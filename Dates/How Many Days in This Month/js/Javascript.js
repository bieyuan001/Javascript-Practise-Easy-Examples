//jQuery
$("input:eq(2)").click(function(){
	var y = $("input:eq(0)").val();
	var m = $("input:eq(1)").val();
	var d = new Date(y,m,0).getDate();
    alert(d);
})