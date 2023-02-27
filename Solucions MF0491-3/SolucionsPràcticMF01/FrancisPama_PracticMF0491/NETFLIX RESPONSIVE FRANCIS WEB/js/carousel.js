const carouselContainer = document.querySelector('.contenedor-carousel');
const movies = document.querySelectorAll('.pelicula');

const leftArrow = document.getElementById('flecha-izquierda');
const rightArrow = document.getElementById('flecha-derecha');

// Event listener for right arrow
rightArrow.addEventListener('click', () => {
	carouselContainer.scrollLeft += carouselContainer.offsetWidth;

	const activeIndicator = document.querySelector('.indicadores .activo');
	if (activeIndicator.nextElementSibling) {
		activeIndicator.nextElementSibling.classList.add('activo');
		activeIndicator.classList.remove('activo');
	}
});

// Event listener for left arrow
leftArrow.addEventListener('click', () => {
	carouselContainer.scrollLeft -= carouselContainer.offsetWidth;

	const activeIndicator = document.querySelector('.indicadores .activo');
	if (activeIndicator.previousElementSibling) {
		activeIndicator.previousElementSibling.classList.add('activo');
		activeIndicator.classList.remove('activo');
	}
});

// Pagination
const pageCount = Math.ceil(movies.length / 5);
const indicators = [];
for (let i = 0; i < pageCount; i++) {
	const indicator = document.createElement('button');

	if (i === 0) {
		indicator.classList.add('activo');
	}

	indicators.push(indicator);
	document.querySelector('.indicadores').appendChild(indicator);
}

indicators.forEach((indicator, index) => {
	indicator.addEventListener('click', () => {
		carouselContainer.scrollLeft = index * carouselContainer.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		indicator.classList.add('activo');
	});
});

// Hover
movies.forEach((movie) => {
	movie.addEventListener('mouseenter', (e) => {
		const element = e.currentTarget;
		setTimeout(() => {
			movies.forEach((movie) => movie.classList.remove('hover'));
			element.classList.add('hover');
		}, 300);
	});
});

carouselContainer.addEventListener('mouseleave', () => {
	movies.forEach((movie) => movie.classList.remove('hover'));
});



/////////////// SEGUNDO METODO ////////////////////
/* 

const movieList = document.querySelector('.carousel');
const movies = movieList.children;
const movieWidth = movies[0].offsetWidth;
const arrowLeft = document.querySelector('.flecha-izquierda');
const arrowRight = document.querySelector('.flecha-derecha');
let currentIndex = 0;

movieList.style.transform = `translateX(${-movieWidth * currentIndex}px)`;

arrowRight.addEventListener('click', () => {
  if (currentIndex === movies.length - 5) return;
  currentIndex++;
  movieList.style.transition = "transform 0.4s ease-in-out";
  movieList.style.transform = `translateX(${-movieWidth * currentIndex}px)`;
});

arrowLeft.addEventListener('click', function () {
  if (currentIndex === 0) return;
  currentIndex--;
  movieList.style.transition = "transform 0.4s ease-in-out";
  movieList.style.transform = `translateX(${-movieWidth * currentIndex}px)`;
});

movieList.addEventListener('transitionend', () => {
  if (movies[currentIndex].id === 'lastClone') {
    movieList.style.transition = "none";
    currentIndex = movies.length - 6;
    movieList.style.transform = `translateX(${-movieWidth * currentIndex}px)`;
  }

  if (movies[currentIndex].id === 'firstClone') {
    movieList.style.transition = "none";
    currentIndex = movies.length - currentIndex;
    movieList.style.transform = `translateX(${-movieWidth * currentIndex}px)`;
	}
});

// Hover
movieList.forEach((movie) => {
	movie.addEventListener('mouseenter', (e) => {
		const element = e.currentTarget;
		setTimeout(() => {
			movies.forEach((movie) => movie.classList.remove('hover'));
			element.classList.add('hover');
		}, 300);
	});
});

carouselContainer.addEventListener('mouseleave', () => {
	movies.forEach((movie) => movie.classList.remove('hover'));
});  */