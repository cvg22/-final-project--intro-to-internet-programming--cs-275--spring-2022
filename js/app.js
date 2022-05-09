var slideIndex = 0;

let advanceSlides = (parameterSlide) => {
    //alert("lleg" + slideIndex);
    slideIndex += parameterSlide;
    showSlides(slideIndex);
    //alert("sal" + slideIndex);
};

let showSlides = () => {
    let slides = document.getElementsByClassName(`slide`);

    if (slideIndex === 0) {
        document.getElementById(`prev`).style.display = `none`;
    }

    else if (slideIndex === slides.length-1) {
        document.getElementById(`next`).style.display = `none`;
    }

    else if (slideIndex > 0) {
        document.getElementById(`prev`).style.display = `block`;
        document.getElementById(`next`).style.display = `block`;
    }

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

document.getElementById(`prev`).style.display = `none`;
showSlides(slideIndex);
