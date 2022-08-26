/* Slider Script */
// get all slider from document.
const carouselContainer = document.querySelectorAll('.skills');

// lets put your function to every one of them
for(let i = 0; i < carouselContainer.length; i++){

  const carousel = function () {
    //const slider = document.querySelector(".slider");
    const slides = carouselContainer[i].querySelectorAll('.section');
    const nextBtn = carouselContainer[i].querySelector(".right");
    const prevBtn = carouselContainer[i].querySelector(".left");
    const slideIcons = carouselContainer[i].querySelectorAll(".skills-slide-icon");

    const circlebar = carouselContainer[i].querySelectorAll(".round");
    
    var slideNumber = 0;
    const numberOfSlides = slides.length;

    //image slider next button
    const nextSlide = function () {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber++;

      if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
      }
    
      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
      setTimeout(function() { Circle(circlebar[slideNumber]); }, 250);
    }

    //image slider previous button
    const prevSlide = function () {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber--;

      if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
      }

      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
      setTimeout(function() { Circle(circlebar[slideNumber]); }, 250);
    }

    //image slider icon button
    slideIcons.forEach((slideIcon, i) => {
      slideIcon.addEventListener('click', () => {
        
        slides[slideNumber].classList.remove("active");
        slideIcons[slideNumber].classList.remove("active");

        slideNumber = i;
        
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
        setTimeout(function() { Circle(circlebar[slideNumber]); }, 250);

      });
    });

    //arrow keys
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);


    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

  };
  carousel();
}

//Circle Bar
function Circle(el){

  $(el).circleProgress({
    startAngle: -1.55,
    emptyFill: 'rgba(255, 255, 255, .1)',
    fill: {color:  $(el).attr("data-color")}
   })
  .on('circle-animation-progress', function(event, progress, stepValue){

     $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
  });
};
Circle('.round');


//Height
$(function(){
  var skills_height = 0;
  $('.skills .section').each(function(){
    skills_height = Math.max(skills_height, $(this).height() + $(this).position().top);
  });

  if(skills_height<760){
    skills_height = 760;
  }

  $('.skills').css('min-height', skills_height);
});