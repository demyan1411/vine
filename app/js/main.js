'use strict';

$(document).ready(function() {

  var mobile = navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i);
  if(mobile != null) {
    $('html').css({'width': window.innerWidth + 'px', 'box-sizing': 'border-box'});
  }

  $('select').styler()

  $('.js-main-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  if ($(".js-main-slider").length) {
    new Bottle();
  }

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
    var $pager = $this.siblings('.products-list__pager')
    var $pagerSlider = $pager.find('.js-products-list-pager');

    $pager.prepend('<div class="js-prev"></div>')
          .append('<div class="js-next"></div>');

    var $next = $pager.find('.js-next');
    var $prev = $pager.find('.js-prev');

    $this.bxSlider({
      mode: 'fade',
      slideWidth: 197,
      pagerCustom: $pagerSlider,
      nextSelector: $next,
      prevSelector: $prev
  	});
  });

  if($('#map').length) {
    ymaps.ready(initMap);
  };

  if($('.js-popup ').length) {
    new PostSlider();
  };

});
