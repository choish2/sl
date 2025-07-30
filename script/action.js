const btn = document.getElementById('backToTop');
const header = document.querySelector('.h-wrap');
const $link = $('#scroll a');

function updateHeaderHeight() {
  const h = document.querySelector('header').offsetHeight;
  document.documentElement.style.setProperty('--header-h', h + 'px');
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 200) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }

  if (scrollY > 0) {
    if (!header.classList.contains('fixed')) {
      header.classList.add('fixed');
      setTimeout(() => header.classList.add('show'), 10);
    }
  } else {
    header.classList.remove('show');
    header.classList.remove('fixed');
  }

  $link.fadeOut(scrollY === 0 ? 0 : 200);
  header.style.backgroundColor = '#D6001C';
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$(function () {
  $link.click(function (e) {
    e.preventDefault();
    $link.fadeOut('slow');
    $('html, body').animate({
      scrollTop: $(window).scrollTop() + $(window).height()
    }, 10);
  });
});

window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);

$(function () {
  $('.tab_wrap li').click(function (e) {
    e.preventDefault();
    $('.tab_wrap li').removeClass('active').css({ border: '1px solid #e6e6e6c9' });
    $(this).addClass('active').css({ border: '1px solid #FA8264' });
  });
});

$(function () {
  $('.nav li.hamb').click(function (e) {
    e.preventDefault();
    $('.mo_glb').fadeIn(400).css({ display: "flex" });
    return false;
  });
});

$(function () {
  $('.mo_glb .mo_nav .hamb').click(function (e) {
    e.preventDefault();
    $('.mo_glb').fadeOut(400);
    return false;
  });
});

$(function () {
  $('.mo_glb .mo_nav li a:gt(0)').click(function (e) {
    $('.mo_glb').fadeOut(400);
  });
});

$('.all').click(function (e) {
  e.preventDefault();
  $('.carousel1').css({ display: 'flex' });
  $('.carousel2, .carousel3').css({ display: 'none' });
});

$('.ad').click(function (e) {
  e.preventDefault();
  $('.carousel2').css({ display: 'flex' });
  $('.carousel1, .carousel3').css({ display: 'none' });
});

$('.maket').click(function (e) {
  e.preventDefault();
  $('.carousel3').css({ display: 'flex' });
  $('.carousel1, .carousel2').css({ display: 'none' });
});

      
    var swiper = new Swiper(".mySwiper2", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
         
    var swiper = new Swiper(".mySwiper3", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      
    });
    

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      }
    }
  });

  window.addEventListener("resize", function () {
    swiper.update();
  });



  let swiperInstance;

  function initSwiper() {
    const screenWidth = window.innerWidth;
    const swiperWrapper = document.querySelector(".mySwiper4 .swiper-wrapper");
    const slides = document.querySelectorAll(".mySwiper4 .swiper-slide");

    if (screenWidth < 768) {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = undefined;
      }

      if (swiperWrapper) {
        swiperWrapper.removeAttribute("style");
      }

      slides.forEach((slide) => {
        slide.removeAttribute("style");
        slide.classList.remove(
          "swiper-slide-active",
          "swiper-slide-next",
          "swiper-slide-prev"
        );
      });

      return;
    }

    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = undefined;
    }

    swiperInstance = new Swiper(".mySwiper4", {
      direction: "vertical",
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
  }

  window.addEventListener("load", initSwiper);
  window.addEventListener("resize", initSwiper);



  window.addEventListener('scroll', function () {
    const section = document.querySelector('.section1');
    const bg = section.querySelector('.background');
    const rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      bg.style.transform = `translateY(${scrollPercent * -20}%)`;
    }
    if (window.innerWidth <= 768) {
    bg.style.transform = 'translateY(0%)';
    return;
    }
  });


document.addEventListener("DOMContentLoaded", function () {
    function setupCarousel(carouselSelector, moreSelector) {
        const slides = document.querySelectorAll(`${carouselSelector} .swiper-slide`);
        const moreBtn = document.querySelector(moreSelector);
        let currentIndex = 1;
        let isExpanded = false;

        function updateSlides() {
            slides.forEach((slide, index) => {
                slide.classList.toggle("visible", index < currentIndex);
            });

            moreBtn.textContent = currentIndex === slides.length ? "접기" : "View more +";
            isExpanded = currentIndex === slides.length;
        }

        function handleMoreClick() {
            if (!isExpanded) {
                if (currentIndex < slides.length) {
                    currentIndex++;
                } else {
                    currentIndex = 1;
                }
            } else {
                currentIndex = 1;
            }
            updateSlides();
        }

        updateSlides();
        moreBtn.addEventListener("click", handleMoreClick);
    }

    // 각 캐러셀에 대해 설정
    setupCarousel(".carousel1", ".more1");
    setupCarousel(".carousel2", ".more2");
    setupCarousel(".carousel3", ".more3");
});
