'use strict';
$(document).ready(function() {
  $('form').on('submit', function(e) {
    return e.preventDefault();
  });

  $('.js-main-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.js-stamps-slider').slick({
		autoplay: false,
		slidesToShow: 4,
  	slidesToScroll: 1,
    variableWidth: true
	});

  $('.js-products-list-slider').bxSlider({
    mode: 'fade',
    slideWidth: 135,
    pagerCustom: '.js-products-list-pager'
	});

});
// 
// $(window).load(function() {
//   $('.main-slider--wrapper').css({
//     'overflow': 'visible'
//   });
// });
