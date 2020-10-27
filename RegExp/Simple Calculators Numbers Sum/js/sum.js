window.addEventListener("load",function(){
	var sumBtn = document.getElementById("sumBtn");
	var youInput = document.getElementById("num");
	youInput.addEventListener("keyup",function(){
		this.value = this.value.replace(/[^(\d)|(\+)]/, "");
	})
	sumBtn.addEventListener("click",function(){
		var sum ;
        var arr = document.getElementById("num").value.split("+");
		sum = arr.reduce((x,y) => Number(x) + Number(y));
        alert(sum);
	})
})
	
