"use strict";

function PostSlider() {
  this.postImages = '[data-post-slider]';
  this.postSlider = $('.js-post-slider');
  this.popup = $('.js-popup');
  this.closeButtons = $('.js-post-overlay, .js-close-popup');

  this.initialize();
}

PostSlider.prototype.initialize = function() {
  this.createSlides();
  this.addSlider();
  this.bindEvents();
}

PostSlider.prototype.bindEvents = function() {
  $(this.postImages).on('click', this.openPopup.bind(this));
  this.closeButtons.on('click', this.closePopup.bind(this));
}

PostSlider.prototype.getImages = function() {
  var imagesArr = [];
  $(this.postImages).each(function(){
    imagesArr.push( $(this).data('postSlider') );
  });
  return imagesArr;
}

PostSlider.prototype.createSlides = function() {
  this.getImages().forEach(function(imageUrl) {
    this.postSlider.append('<img class="js-post-slide" src="' + imageUrl + '">');
  }, this);
}

PostSlider.prototype.addSlider = function() {
  this.postSlider.slick({
    variableWidth: true,
    dots: true
  });
}

PostSlider.prototype.openPopup = function(e) {
  this.postSlider.slick('slickGoTo', $(e.target).index(this.postImages), true);
  this.popup.addClass('js-active');
}

PostSlider.prototype.closePopup = function() {
  this.popup.removeClass('js-active');
}
