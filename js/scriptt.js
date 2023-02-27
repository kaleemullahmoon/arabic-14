var swiper = new Swiper(".slide-content", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    150: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 3,
    },
    450: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 5,
    },
  },
});
