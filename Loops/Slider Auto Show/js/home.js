//Javascript 1
/*
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/

//Javascript 2
var currentSlide = 0;
nextSlide();

function nextSlide() {
	var slides = document.querySelectorAll('.slider');
	for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
    slides[currentSlide].style.display = 'block';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].style.display = 'none';
	setTimeout(nextSlide, 2000);
}
