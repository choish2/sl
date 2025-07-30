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