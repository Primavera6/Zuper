document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = Array.from(carousel.children);
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;

    function moveToSlide(index) {
        carousel.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
    }

    function slideNext() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        moveToSlide(currentIndex);
    }

    function slidePrev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        moveToSlide(currentIndex);
    }

    prevButton.addEventListener('click', slidePrev);
    nextButton.addEventListener('click', slideNext);
});
