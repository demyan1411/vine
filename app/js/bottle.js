"use strict";

function Bottle() {
  this._initialize();
}

Bottle.prototype._initialize = function () {
  this._move();
  $(window).resize(this._move.bind(this));
}

Bottle.prototype._move = function () {
  this._offChange();
  this._checkWindowWidth();
  this._moveBottle(this._rightCoord);
}

Bottle.prototype._offChange = function () {
  $('.js-main-slider').trigger('afterChange');
  $('.js-main-slider').off('afterChange').off('beforeChange');
}

Bottle.prototype._checkWindowWidth = function () {
  if ($(window).width() > 1215) {
    this._rightCoord = 207;
  } else {
    this._rightCoord = 165;
  }
}

Bottle.prototype._moveBottle = function (rightCoord) {
  $('.js-main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(".js-main-slider .slick-active .main-slider__bottle").animate({right: rightCoord + 70 + 'px'}, 150);
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".js-main-slider .slick-active .main-slider__bottle").animate({right: rightCoord + 'px'}, 150);
  });
}



// moveBottle(rightCoord);
