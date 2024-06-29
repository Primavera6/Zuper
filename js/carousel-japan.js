let slideJapanIndex = 0;
showSlidesJapan();

function showSlidesJapan() {
    let slidesJapan = document.getElementsByClassName("mySlides-japan");
    for (let i = 0; i < slidesJapan.length; i++) {
        slidesJapan[i].classList.remove("show");
    }
    slideJapanIndex++;
    if (slideJapanIndex > slidesJapan.length) {
        slideJapanIndex = 1;
    }
    slidesJapan[slideJapanIndex - 1].classList.add("show");
    setTimeout(showSlidesJapan, 3000); // Change image every 3 seconds
}
