var index = 1;
slides(index);

function plusSlides(n) {
  slides(index += n);
}

function currentSlide(n) {
  slides(index = n);
}

function slides(n) {
  var i;
  var slide = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slide.length) {index = 1}    
  if (n < 1) {index = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[index-1].style.display = "block";  
  dots[index-1].className += " active";
}