'use strict';
$(document).ready(function() {
  $('form').on('submit', function(e) {
    return e.preventDefault();
  });

  // $('.js-main-slider').slick({
  //   dots: true,
  //   slidesToShow: 1
  // });

  $('.js-main-slider').bxSlider({
      autoControls: true,
      touchEnabled: true
  });

  $('.js-stamps-slider').slick({
		autoplay: false,
		slidesToShow: 4,
  	slidesToScroll: 1,
    variableWidth: true
	});

});
