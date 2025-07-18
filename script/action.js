
const btn = document.getElementById('backToTop');
const header = document.querySelector('.h-wrap');
const $link = $('#scroll a');

function updateHeaderHeight() {
  const h = document.querySelector('header').offsetHeight;
  document.documentElement.style.setProperty('--header-h', h + 'px');
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (window.innerWidth > 768 && scrollY > 200) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'block';
  }

  if (window.innerWidth > 768) {
    if (scrollY > 0) {
      if (!header.classList.contains('fixed')) {
        header.classList.add('fixed');
        setTimeout(() => header.classList.add('show'), 10);
      }
    } else {
      header.classList.remove('show');
      header.classList.remove('fixed');
    }
  } else {
    header.classList.remove('show');
    header.classList.remove('fixed');
  }

  if (scrollY === 0) {
    $link.fadeIn('slow');
  } else {
    $link.fadeOut('fast');
  }
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$(function(){
  $link.click(function(e){
    e.preventDefault();
    $link.fadeOut('slow');
    $('html, body').animate({
      scrollTop: $(window).scrollTop() + $(window).height()
    }, 10);
  });
});

window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);
