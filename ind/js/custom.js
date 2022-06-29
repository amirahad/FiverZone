$(document).ready(function(){
	// $('.main_sliders').slick({
  //       dots: false,
  //       arrows: true,
  //       infinite: true, 
	// 	autoplay: true,
	// 	autoplaySpeed: 10000,
  //       speed: 3000, 
  //       nextArrow:'.slidNext',
  //       prevArrow:'.slidPrv',
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       responsive: [
  //         {
  //           breakpoint: 1024,
  //           settings: {
  //             slidesToShow:1,
  //             slidesToScroll: 1,
  //             infinite: true,
  //             dots: false,
  //       arrows: true,
  //           }
  //         },
  //         {
  //           breakpoint: 600,
  //           settings: {
  //             slidesToShow: 1,
	// 		  speed: 1000,
  //             slidesToScroll: 2
  //           }
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             slidesToShow: 1,
	// 		  speed: 1000, 
  //             slidesToScroll: 1
  //           }
  //         } 
  //       ]
  //     });
  
  $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  
});


$(function () {
  $(document).scroll(function () {
    var $nav = $(".header_section");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()*2);
    // console.log("applied");
    var $anchor = $('.any');
    if($(this).scrollTop() > $nav.height()*2){
      $anchor.css('color', '#1A78F2');
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
      $logo.attr("src", "./images/logo5.png", $(this).scrollTop() > $nav.height()*2);
    }else {
      $logo.attr("src", "./images/logo6.png", $(this).scrollTop() > $nav.height()*2);
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
