// Код логіки слайдера пишемо тут

const container = document.querySelector('#carousel'); // Контейнер слайдера
const slidesContainer = container.querySelector('#slides-container'); // Контейнер для слайдів
const slides = container.querySelectorAll('.slide');
const indicatorsContainer = container.querySelector('#indicators-container'); // Контейнер для індикаторів
const indicators = container.querySelectorAll('.indicator'); // Індикатори слайдів
let next = container.querySelector('#next-btn');
let previous = container.querySelector('#prev-btn');
let pauseButton = container.querySelector('#pause-btn');

const SLIDES_COUNT = 5; // Кількість слайдів
const CODE_ARROW_LEFT = 37; // Код клавіші "вліво"
const CODE_ARROW_RIGHT = 39; // Код клавіші "вправо"
const CODE_SPACE = 32; // Код клавіші "пробіл"
const FA_PAUSE = '<i class="fas fa-pause"></i>'; // Іконка паузи
const FA_PLAY = '<i class="fas fa-play"></i>'; // Іконка відтворення
const TIMER_INTERVAL = 2000; // Інтервал зміни слайдів

let currentSlide = 0; // Поточний слайд
let isPlaying = true; // Статус відтворення слайд-шоу
let timerId = null; // Таймер для автоматичної зміни слайдів
let swipeStartX = null; // Початкова позиція свайпу
let swipeEndX = null; // Кінцева позиція свайпу

let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}
    
function previousSlide() {
    goToSlide(currentSlide - 1);
}
    
function goToSlide(n) {
    slides[currentSlide].classList.toggle('active');
    indicators[currentSlide].classList.toggle('active');
    currentSlide = (n + SLIDES_COUNT) % SLIDES_COUNT;
    slides[currentSlide].classList.toggle('active');
    indicators[currentSlide].classList.toggle('active');
}


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

function indicatorsClickHandler(event) {
    const { target } = event;
    if (target && target.classList.contains('indicator')) {
        console.log('Indicator clicked:', target);
        pauseSlideShow();
        goToSlide(+target.getAttribute('data-slide-to'));
    }
}



next.onclick = function () {
pauseSlideShow();
nextSlide();
};

previous.onclick = function () {
pauseSlideShow();
previousSlide();
};

indicatorsContainer.addEventListener('click', indicatorsClickHandler);