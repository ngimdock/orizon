
const checkMenu = document.querySelector(".check-menu");

/* cette fonction me permet masquer et afficher le menu du site*/
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


/*cette fonction me permet de changer la couler de la boite d'affichage du menu lors du scroll de la fenettre principale*/
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


/* cette fonction me permet d'afficher les éléments de la page avec des animations lors du scroll de la page*/


const handleIntersect = (entries, observer) => {
	entries.forEach(entry => {
		if(entry.intersectionRatio >= ratio) {
			entry.target.classList.add("revel-visible");
			observer.unobserve(entry.target);
		}
	})
};

const ratio = 0.4;

const options = {  // paramètrage de l'observateur
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const observer = new IntersectionObserver(handleIntersect, options); // définition de l'observateur

const elementToObservate = document.querySelectorAll(".revel-down, .revel-up, .revel-right");
console.log(elementToObservate);

elementToObservate.forEach(elt => {
	observer.observe(elt); //pour que l'observateur observe l'élément cible
})
