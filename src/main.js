// Код логіки слайдера пишемо тут

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}
    
function previousSlide() {
    goToSlide(currentSlide - 1);
}
    
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide active';
}


let isPlaying = true;
let pauseButton = document.querySelector('#pause-btn');

function pauseSlideShow() {
    pauseButton.innerHTML = 'Play';
    isPlaying = false;
    clearInterval(slideInterval);
}

function playSlideShow() {
    pauseButton.innerHTML = 'Pause';
    isPlaying = true;
    slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
    if (isPlaying) pauseSlideShow();
    else playSlideShow();
};

let next = document.querySelector('#next-btn');
let previous = document.querySelector('#prev-btn');

next.onclick = function () {
pauseSlideShow();
nextSlide();
};

previous.onclick = function () {
pauseSlideShow();
previousSlide();
};