let navMobile = document.getElementsByClassName("nav-mobile")[0];
let hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];

hamburgerMenu.addEventListener("click", () => {
  navMobile.classList.toggle("nav-show");
  if (navMobile.classList.contains("nav-show")) {
    hamburgerMenu.classList.add("fixed-hamburger-menu");
  } else {
    hamburgerMenu.classList.toggle("fixed-hamburger-menu");
  }
});

const swiperService = new Swiper(".swiper-service", {
  // Default parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
  speed: 1000,

  autoplay: {
    delay: 5000,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    820: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    enable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper = new Swiper(".swiper-product", {
  // Default parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
  speed: 1000,

  autoplay: {
    delay: 5000,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    820: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    enable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
