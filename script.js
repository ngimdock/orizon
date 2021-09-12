
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



//méthode à exécuter une fois le ratio d'intersection est atteind
const handleDisplay = (entrie, observer) =>  { 
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

elementToObservate.forEach(elt => {
	observer.observe(elt); //selection de tous les l'éléments à observer(cible)
})

// cette fonction permet de faire en sorte quel élément suit le curseur dans ça direction
const cursor = document.querySelector('.cursor');

const cursorEffect = (event) => {
	cursor.style.top = event.pageY + "px";
	cursor.style.left = event.pageX + "px";
};
window.addEventListener("mousemove", cursorEffect);


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

console.log(typeof Array(10))


window.onload = function() {
	carousselMaker()
}

$('.article1').tilt({
    glare: true,
    maxGlare: .1
})

