/* Navbar Animation */
$(document).ready(function(){
    $('li').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
})


/* Card Filter Script */
filterCards("all");

function filterCards(c){
    var x, i;
    x = document.getElementsByClassName("card");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++){
        removeCard(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addCard(x[i], "show")
    }
}

function addCard(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0;  i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeCard(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0;  i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


/* Card Pop-up Script */
var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

//javascript for quick view button
var popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
    popup(i);
    });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
        popupView.classList.remove('active');
    });
    });
});

/* Slider Script */
// get all slider from document.
const slideContainer = document.querySelectorAll('.slider');

// lets put your function to every one of them
for(let i = 0; i < slideContainer.length; i++){

  const slider = function () {
    //const slider = document.querySelector(".slider");
    const slides = slideContainer[i].querySelectorAll('.slide');
    const nextBtn = slideContainer[i].querySelector(".next-btn");
    const prevBtn = slideContainer[i].querySelector(".prev-btn");
    const slideIcons = slideContainer[i].querySelectorAll(".slide-icon");
    
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
    }

    //image slider icon button
    slideIcons.forEach((slideIcon, i) => {
      slideIcon.addEventListener('click', () => {
        
        slides[slideNumber].classList.remove("active");
        slideIcons[slideNumber].classList.remove("active");

        slideNumber = i;
        
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");

      });
    });

    //arrow keys
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);


    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    

    var playSlider;

    var repeater = () => {
      playSlider = setInterval(function(){
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
      }, 4000);
    }

    repeater();

    //stop the image slider autoplay on mouseover
    slideContainer[i].addEventListener("mouseover", () => {
      clearInterval(playSlider);
    });

    //start the image slider autoplay again on mouseout
    slideContainer[i].addEventListener("mouseout", () => {
      repeater();
    });

  };
  slider();
}