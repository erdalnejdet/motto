const header = document.querySelector('header');
if (header) {
  window.addEventListener('scroll', () => {
    const headerHeight = header.offsetHeight;
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      header.classList.add('header-active');
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-active');
      header.classList.remove('header-fixed');
    }
  });
}





$(".faq-question").click(function () {

  $(".faq-question.active").not(this).removeClass("active").next('.faq-answer').slideUp();

  var answer = $(this).next('.faq-answer');


  answer.slideToggle();


  $(this).toggleClass("active");
});


// Mobile Menu Toggle
$('.mobile-toggle').click(function (event) {
  event.stopPropagation();
  $(this).toggleClass('active'); // Toggle 'active' class on the button itself
  $('body').toggleClass('scroll-disabled');
  $('.mobile-header-menu').toggleClass('mobile-header-menu-active');
});

// Close menu when clicking a link
$('.mobile-header-menu a').click(function () {
  $('.mobile-toggle').removeClass('active');
  $('body').removeClass('scroll-disabled');
  $('.mobile-header-menu').removeClass('mobile-header-menu-active');
});

// Close menu when clicking outside
$(document).click(function (event) {
  var $target = $(event.target);
  if (!$target.closest('.mobile-toggle').length &&
    !$target.closest('.mobile-menu-inner').length &&
    $('.mobile-header-menu').hasClass('mobile-header-menu-active')) {
    $('.mobile-toggle').removeClass('active');
    $('body').removeClass('scroll-disabled');
    $('.mobile-header-menu').removeClass('mobile-header-menu-active');
  }
});






// Show the first tab and hide the rest
$('.hekim-tab li:first-child').addClass('active');
$('.hekim-tab-content').hide();
$('.hekim-tab-content:first').show();

// Click function
$('.hekim-tab li').click(function () {
  $('.hekim-tab li').removeClass('active');
  $(this).addClass('active');
  $('.hekim-tab-content').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



var $backToTop = $(".fixed");
$backToTop.hide();


$(window).on('scroll', function () {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function (e) {
  $("html, body").animate({
    scrollTop: 0
  }, 500);
});


document.addEventListener("DOMContentLoaded", function () {
  const mapbutton = document.querySelector(".map-button");
  const map = document.querySelector(".map");

  if (mapbutton && map) { // Seçilen elementlerin varlığını kontrol et
    mapbutton.addEventListener("click", () => {
      if (map.classList.contains("active")) {
        map.classList.remove("active");
        mapbutton.classList.remove("active");
      } else {
        map.classList.add("active");
        mapbutton.classList.add("active");
      }
    });
  } else {

  }
});
$(document).ready(function () {
  var scrollOffset = 250;
  var clickedLinkId = ''; // Tıklanan öğenin ID'sini global olarak tanımla

  $('.scroll-list ul li a').on('click', function (e) {
    // Önce mevcut aktif sınıfı temizle
    $('.scroll-list ul li a').removeClass('active');

    var href = $(this).attr('href');
    clickedLinkId = href.substring(1); // Href'ten # işaretini kaldırarak tıklanan öğenin ID'sini al
    var targetOffset = $(href).offset().top - scrollOffset;

    $('html, body').animate({
      scrollTop: targetOffset
    }, 600);

    // Tıklanan öğenin ID'sine aktif sınıfı ekle
    $(this).addClass('active');

    e.preventDefault();
  });

  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();

    // Belirli bir id'ye sahip öğenin 200 piksel yukarıda olup olmadığını kontrol et
    if ($('' + clickedLinkId).length) {
      var targetTop = $('' + clickedLinkId).offset().top - 150;

      if (scrollPosition > targetTop) {
        // 200 piksel yukarıda ise yapılacak işlem

      } else {
        // 200 piksel yukarıda değilse yapılacak işlem

      }
    }
  });
});


const modalbuttons = document.querySelectorAll('.modal-button');
const modal = document.querySelector('.modal');
modalbuttons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.add('open');
  });
});

const modal_close = document.querySelector('.modal-close-button');
if (modal_close) {
  modal_close.addEventListener('click', () => {
    modal.classList.remove('open');
    console.log("tıklandı");
  });
}


$(document).ready(function () {
  $(".new-faq-box").click(function () {

    $(".new-faq-box.active").not(this).removeClass("active").next('.new-faq-answer').slideUp();

    var answer = $(this).next('.new-faq-answer');

    answer.slideToggle();

    $(this).toggleClass("active");
  });
});
