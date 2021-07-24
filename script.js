
const checkMenu = document.querySelector(".check-menu");

checkMenu.onclick = function() {
	const pageMenu = document.querySelector(".page-menu");
	pageMenu.classList.toggle("show-page-menu")
	this.classList.toggle("active");

	const boxMenu = document.querySelector(".box");
	const lines = document.querySelectorAll(".ligne");
	if(boxMenu.classList.contains('dark-boxMenu') && this.classList.contains('active')){
		boxMenu.classList.remove('dark-boxMenu');
		lines.forEach(line => line.classList.remove('white-line'))
	}else{
		boxMenu.classList.add('dark-boxMenu');
		lines.forEach(line => line.classList.add('white-line'))
	}

};

/*const scrollWindow = () => {
	window.addEventListener("scroll", () => {
		console.log(window.scrollY);
	});
};

scrollWindow();*/

window.onscroll = function(event) {
	
	const boxMenu = document.querySelector(".box");
	const lines = document.querySelectorAll(".ligne");
	if(this.scrollY > 80){
		boxMenu.classList.add("dark-boxMenu");
		lines.forEach(line  => line.classList.add("white-line"))
	}else{
		boxMenu.classList.remove("dark-boxMenu");
		lines.forEach(line  => line.classList.remove("white-line"))
	}
};