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

  $('.js-products-list-slider').each(function () {
    var $this = $(this);
    var $pager = $this.siblings('.js-products-list-pager');

    $this.bxSlider({
      mode: 'fade',
      slideWidth: 200,
      pagerCustom: $pager
  	});
  });


});
