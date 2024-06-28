document.addEventListener('DOMContentLoaded', function() {
    const slidesJapan = document.querySelectorAll('mySlides-japan');
    console.log(slidesJapan)
    let currentIndexJapan = 0;

    function showSlidesJapan() {
        if (slidesJapan.length === 0) return; // Si aucune slide n'est trouvée, sortir de la fonction
        slidesJapan.forEach(slide => slide.classList.remove('show'));
        currentIndexJapan++;
        if (currentIndexJapan > slidesJapan.length) {
            currentIndexJapan = 1;
        }
        slidesJapan[currentIndexJapan - 1].classList.add('show');
        setTimeout(showSlidesJapan, 3000); // Change image every 3 seconds
    }

    showSlidesJapan();
});