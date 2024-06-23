ymaps.ready(function () {
  var myMap = new ymaps.Map('map', getMapDate(), {
      searchControlProvider: 'yandex#search'
    })

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    )
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'CatEnergy',
      balloonContent: 'CatEnergy</br>Санкт-Петербург, Большая Конюшенная улица, 19/8'
    }, getMarkDate());

  myMap.controls.remove("mapTools")
    .remove("fullscreenControl")
    .remove("geolocationControl")
    .remove("zoomControl")
    .remove("rulerControl")
    .remove("typeSelector")
    .remove("searchControl")
    .remove("trafficControl");

  myMap.geoObjects
    .add(myPlacemark)
});

const YAMAP_DATA = {
  mapData: {
    mobile: {
      center: [59.93867520581723,30.32293205626909],
      zoom: 14
    },
    tablet: {
      center: [59.93867520581723,30.32293205626909],
      zoom: 15.5
    },
    desktop: {
      center: [59.93867520581723,30.32293205626909],
      zoom: 16.5,
      bounds: [[59.93361437680479,30.302922777018033],[59.943649137882424,30.34309153922506]]
    }
  },
  placemarkData: {
    mobile: {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map-pin@1x.png',
      // Размеры метки.
      iconImageSize: [57, 53],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -45]
    },
    tablet: {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-pin-tablet@1x.png',
      iconImageSize: [113, 106],
      iconImageOffset: [-50, -55]
    },
    desktop: {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-pin-tablet@1x.png',
      iconImageSize: [113, 106],
      iconImageOffset: [-50, -55]
    }
  }
}

function getMapDate() {
  const windowSize = window.outerWidth;
  if (windowSize >= 1300) {
    return YAMAP_DATA.mapData.desktop;
  } else if (windowSize >= 768) {
    return YAMAP_DATA.mapData.tablet;
  } else {
    return YAMAP_DATA.mapData.mobile;
  }
}

function getMarkDate() {
  const windowSize = window.outerWidth;
  if (windowSize >= 1300) {
    return YAMAP_DATA.placemarkData.desktop;
  } else if (windowSize >= 768) {
    return YAMAP_DATA.placemarkData.tablet;
  } else {
    return YAMAP_DATA.placemarkData.mobile;
  }
}

var pixelCenter = map.getGlobalPixelCenter(coordinates);
