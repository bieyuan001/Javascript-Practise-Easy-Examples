window.addEventListener("load",function(){
	var sumBtn = document.getElementById("sumBtn");
	var youInput = document.getElementById("num");
	youInput.addEventListener("keyup",function(){
		this.value = this.value.replace(/[^(\d)|(\+)]/, "");
	})
	sumBtn.addEventListener("click",function(){
		let sum = 0;
        let arr = document.getElementById("num").value.split("+");
        this.value = this.value.replace(/[^(\d)|(\+)]/,"");
		sum = arr.reduce((x,y) => Number(x) + Number(y));
        alert(sum);
	})
})
	
