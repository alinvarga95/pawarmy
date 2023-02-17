const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

slider.addEventListener('click', function(event) {
	if (event.clientX < window.innerWidth/2) {
		showPreviousSlide();
	} else {
		showNextSlide();
	}
});

function showNextSlide() {
	if (currentSlide < slides.length - 1) {
		slides[currentSlide].classList.add('hidden');
		currentSlide++;
		slides[currentSlide].classList.remove('hidden');
	}
}

function showPreviousSlide() {
	if (currentSlide > 0) {
		slides[currentSlide].classList.add('hidden');
		currentSlide--;
		slides[currentSlide].classList.remove('hidden');
	}
}
