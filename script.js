var cercle = document.querySelectorAll(".cercle");
for (var i = 0; i < cercle.length; i++) {
	cercle[i].onclick = function(){
		var idDeMaDiv = this.id;
		if(!this.classList.contains("active")){
		for (var j = 0; j < cercle.length; j++) {
	cercle[j].classList.remove("active");
		var idTmp = cercle[j].id;
		document.getElementById("description_"+idTmp).style.display = "none";		
		}
		this.classList.add("active");		
		document.getElementById("description_"+idDeMaDiv).style.display = "block";
		} else {
		this.classList.remove("active");
		document.getElementById("description_"+idDeMaDiv).style.display = "none";
		}
	}
}





























