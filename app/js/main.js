'use strict';
$(document).ready(function() {

  $('select').styler()

  $('.js-main-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.js-gallery-main-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-gallery-min-slider'
  });

  $('.js-gallery-min-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.js-gallery-main-slider',
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true
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
      slideWidth: 197,
      pagerCustom: $pager
  	});
  });

  if($('#map').length) {
    ymaps.ready(initMap);
  };

  if($('.js-popup ').length) {
    new PostSlider();
  };

});
