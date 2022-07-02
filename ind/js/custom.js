


$(function () {
  $(document).scroll(function () {
    var $nav = $(".header_section");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()*2);
    // console.log("applied");
    var $anchor = $('.any');
    if($(this).scrollTop() > $nav.height()*2){
      $anchor.css('color', '#003E1B');
    }else{
      $anchor.css('color', '#fff');
    }
    // $anchor.toggleClass('blue', $(this).scrollTop() > $nav.height()*2);
    var $nav2 = $(".high");
    // console.log($nav2.height());
    $nav2.toggleClass('d-md-block', $(this).scrollTop() > $nav.height()*4)
    var $nav3 = $(".hide");
     if($(window).width() > 768){
      $nav3.toggleClass('d-block', $(this).scrollTop() > $nav.height()*2)
    }
    var $logo = $(".logo");
    $logo.addClass('d-none', $(this).scrollTop() > $nav.height()*2)

    if($(this).scrollTop() > $nav.height()*2){
      $logo.attr("src", "./images/fiverZone.png", $(this).scrollTop() > $nav.height()*2);
    }else {
      $logo.attr("src", "./images/fiverZone2.png", $(this).scrollTop() > $nav.height()*2);
    }
    // $logo.attr("src", "./images/logo5.png", $(this).scrollTop() > $nav.height()*2);
  });
});


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay:{
    delay: 2000,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    loop: true,
});


var swiper2 = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: false,
  centerPadding: "60px",
  autoplay: true,
  autoplaySpeed: 2000,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
