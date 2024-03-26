// Initialize and add the map

var swiper = new Swiper(".ourImages", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3300,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper(".ourClientsSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    420: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

let map;

const origin = { lat: 50.433488, lng: 30.544101 };
const destination = { lat: 49.963564, lng: 30.841315 };

var directionsDisplay;
var directionsService;

function initMap() {
  directionsService = new google.maps.DirectionsService();
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: destination,
  });
  directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
  });
  calcRoute();
}

function calcRoute() {
  var request = {
    origin: origin,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING,
  };
  directionsService.route(request, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}

initMap();
