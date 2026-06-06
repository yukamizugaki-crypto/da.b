/* nav.js — hamburger toggle (header v2) */
(function () {
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function () {
    var isOpen = hamburger.classList.toggle('open');
    if (isOpen) {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  window.closeMobile = function () {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Slideshow (runs if slideshow elements exist on the page)
  var slides = document.querySelectorAll('.photo-slideshow__slide');
  if (slides.length >= 2) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4000);
  }
})();
