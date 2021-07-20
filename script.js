

const checkMenu = document.querySelector(".check-menu");
const pageMenu = document.querySelector(".page-menu");

checkMenu.onclick = function() {
	pageMenu.classList.toggle("show-page-menu")
	this.classList.toggle("active");
};