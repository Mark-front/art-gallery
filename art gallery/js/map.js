let center = [55.758463, 37.601079];

function init() {
    let map1 = new ymaps.Map('contact__map1', {
        center: center,
        zoom: 16
    });

    let map2 = new ymaps.Map('contact__map2', {
        center: center,
        zoom: 16
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/MapIcon.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });

    let placemark2 = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/MapIcon.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });

    map1.controls.remove('geolocationControl'); // удаляем геолокацию
    map1.controls.remove('searchControl'); // удаляем поиск
    map1.controls.remove('trafficControl'); // удаляем контроль трафика
    map1.controls.remove('typeSelector'); // удаляем тип
    map1.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map1.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map1.controls.remove('rulerControl'); // удаляем контрол правил
    map1.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map2.controls.remove('geolocationControl'); // удаляем геолокацию
    map2.controls.remove('searchControl'); // удаляем поиск
    map2.controls.remove('trafficControl'); // удаляем контроль трафика
    map2.controls.remove('typeSelector'); // удаляем тип
    map2.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map2.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map2.controls.remove('rulerControl'); // удаляем контрол правил

    map1.geoObjects.add(placemark);
    map2.geoObjects.add(placemark2);
}

ymaps.ready(init);