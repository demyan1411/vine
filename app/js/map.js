function initMap() {
  var myMap = new ymaps.Map('map', {
          center: [55.67447828, 37.43489100],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/icon.png',
          // Размеры метки.
          iconImageSize: [40, 54],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -56]
      });

  myMap.geoObjects.add(myPlacemark);
}
