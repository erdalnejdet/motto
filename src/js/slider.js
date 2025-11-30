const swiper3 = new Swiper(".car-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 4,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 4,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 4,
    },
    1280: {
      slidesPerView: 5.1,
      spaceBetween: 4,
    },
  },
});

const swiper5 = new Swiper(".price-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
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
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const service = new Swiper(".scroll-slider", {
  loop: true,
  autoPlay: true,
  paginationClickable: false,
  autoplay: {
    delay: 0,

  },
  freeMode: true,
  speed: 1200,
  roundLengths: true,
  grabCursor: true,
  freeModeMomentum: false,
  spaceBetween: 0,
  breakpoints: {
    960: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    540: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  }
});

const comments = new Swiper(".comments-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
  },
});



var swiper1 = new Swiper(".main-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  navigation: {
    nextEl: '.main-next',

  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});


const kurumsalslider = new Swiper(".galery-slider", {
  slidesPerView: 2.5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 4000, // Otomatik oynatma süresi (4 saniye)
  },
  pagination: {
    el: ".galery-slider-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});


const patiens = new Swiper(".patiens-slider", {
  slidesPerView: 2.5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 4000, // Otomatik oynatma süresi (4 saniye)
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  },
});

const heroSlider = new Swiper(".hero-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },
});

// Players Tab Functionality
let playersSliders = {};

function initPlayersSlider(sliderElement) {
  if (!sliderElement) return null;

  const sliderId = sliderElement.getAttribute('data-slider');
  if (playersSliders[sliderId]) {
    return playersSliders[sliderId];
  }

  const swiper = new Swiper(sliderElement, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  playersSliders[sliderId] = swiper;
  return swiper;
}

// Initialize all players sliders
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the first active tab's slider
  const activeTab = document.querySelector('.players-tab-content.active');
  if (activeTab) {
    const activeSlider = activeTab.querySelector('.players-slider');
    if (activeSlider) {
      initPlayersSlider(activeSlider);
    }
  }
});

// Tab switching functionality
$(document).ready(function() {
  $('.players-tab-menu li a').on('click', function(e) {
    e.preventDefault();
    
    const tabId = $(this).attr('data-tab');
    
    // Remove active class from all tabs and contents
    $('.players-tab-menu li').removeClass('active');
    $('.players-tab-content').removeClass('active');
    
    // Add active class to clicked tab
    $(this).parent('li').addClass('active');
    
    // Show corresponding content
    $(`#${tabId}`).addClass('active');
    
    // Initialize or update slider for the active tab
    const activeSlider = document.querySelector(`#${tabId} .players-slider`);
    if (activeSlider) {
      const sliderId = activeSlider.getAttribute('data-slider');
      
      if (!playersSliders[sliderId]) {
        initPlayersSlider(activeSlider);
      } else {
        // Update slider if it already exists
        setTimeout(function() {
          playersSliders[sliderId].update();
        }, 100);
      }
    }
  });
});