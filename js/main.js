$(document).ready(function(){
    $('.slider').slick({
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style><i class="fas fa-chevron-left"></i> вернуться назад</button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style>СЛЕДУЮЩИЙ ШАГ <i class="fas fa-chevron-right"></i></button>',
        speed: 1600,
        infinite: false,
        initiaSlide: 0,
        draggable: false,
    });
				
});

  
var slider = document.querySelectorAll(".input-range") ;

slider.forEach( slide => {
  var wrapper = slide.closest('.main'),
      selector = wrapper.querySelector('.selector'),
      selectValue = wrapper.querySelector('.selectValue'),
      progressBar = wrapper.querySelector('.progressBar');
  
  selectValue.innerHTML = slide.value;
  slide.oninput = function(){
    selectValue.innerHTML = this.value;
    selector.style.left = (this.value*2) + "%";
    progressBar.style.width = this.value + "%";
  }
})

var slider = document.querySelectorAll(".input-range-two") ;

slider.forEach( slide => {
  var wrapper = slide.closest('.main'),
      selector = wrapper.querySelector('.selector'),
      selectValue = wrapper.querySelector('.selectValue'),
      progressBar = wrapper.querySelector('.progressBar');
  
  selectValue.innerHTML = slide.value;
  slide.oninput = function(){
    selectValue.innerHTML = this.value;
    selector.style.left = (this.value*10) + "%";
    progressBar.style.width = this.value + "%";
  }
})