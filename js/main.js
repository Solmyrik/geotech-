const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach((e) => {
  e.onclick = () => {
    if (menuBody.classList.contains('_active')) {
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      document.body.classList.toggle('_lock');
    }
  };
});

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

new Swiper('.slider', {
  slidesPerView: 1,
  loop: true,
  speed: 800,
  navigation: {
    nextEl: '.arrow_next',
    prevEl: '.arrow_prev',
  },
});

const mapSection = document.querySelector('.adres__map');
const mapSectionTwo = document.querySelector('.adres__map_two');
if (mapSection) {
  ymaps.ready(init);

  function init() {
    let map = new ymaps.Map('map1', {
      center: [64.54208212885155, 40.52495164418026],
      zoom: 17,
    });

    let placemark = new ymaps.Placemark([64.54208212885155, 40.52495164418026], {}, {});

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placemark);
  }
}
if (mapSectionTwo) {
  ymaps.ready(init);

  function init() {
    let map = new ymaps.Map('map2', {
      center: [64.5454982140776, 40.531745230653726],
      zoom: 17,
    });

    let placemark = new ymaps.Placemark([64.5454982140776, 40.531745230653726], {}, {});

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placemark);
  }
}

const headerAdres = document.querySelector('.header__adres');
const adresBlock = document.querySelector('.adres');

headerAdres.addEventListener('mouseover', () => {
  window.scrollTo(0, adresBlock.getBoundingClientRect().top);
});

const priceBody = document.querySelector('.price__body_fake');
const priceBtn = document.querySelector('.price__btn');

priceBtn.addEventListener('click', (e) => {
  priceBody.style.display = 'flex';
  priceBtn.style.display = 'none';
});
