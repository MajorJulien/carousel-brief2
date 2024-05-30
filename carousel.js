let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function next() {
  showSlide(slideIndex + 1);
}

showSlide(slideIndex);
