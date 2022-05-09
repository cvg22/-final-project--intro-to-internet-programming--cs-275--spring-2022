var slideIndex = 0;

let advanceSlides = (parameterSlide) => {
    //alert("lleg" + slideIndex);
    slideIndex += parameterSlide;
    showSlides(slideIndex);
    //alert("sal" + slideIndex);
};

let showSlides = () => {
    let slides = document.getElementsByClassName(`slide`);
    alert("sal" + slideIndex);
    if (slideIndex > slides.length - 1) {
        slideIndex = slides.length - 1;
    }
    if (slideIndex < 0) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = `none`;
    }
    slides[slideIndex].style.display = `block`;
};

showSlides(slideIndex);
