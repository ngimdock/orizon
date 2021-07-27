
const checkMenu = document.querySelector(".check-menu");

// cette fontion me permet d'ajouter la class active sur la box qui affiche le menu
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


//cette fonction me permet de changer la propriété css de la box qui affiche le menu du site

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




const handleDisplay = (entrie, observer) =>  { //méthode à exécuter une fois le ratio d'intersection est atteind
	entrie.forEach(entry => {
		if(entry.intersectionRatio > ratio){
			entry.target.classList.add("revel-visible");
			observer.unobserve(entry.target);
		}
	} )
};

let ratio = 0.3
const options = { //configuration de l'observateur
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const observer = new IntersectionObserver(handleDisplay, options); //création de l'observateur observer

const elementToObservate = document.querySelectorAll(".revel-bottom, .revel-top, .revel-right");
console.log(elementToObservate);
elementToObservate.forEach(elt => {
	observer.observe(elt); //selection de tous les l'éléments à observer(cible)
})


// cette fonction me permet de définir le premier caroucel de la page d'acceuil


const carousselMaker = () => {

	$('.slider-container').slick({
		dots: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  cssEase: 'linear'
	});

	$('.top-boxv').slick({
		autoplay: true,
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});

}


window.onload = function() {
	carousselMaker()
}
