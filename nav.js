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

  // ScrollSpy to highlight the active navigation item
  var sections = document.querySelectorAll('.section-container');
  var navLinks = document.querySelectorAll('.header__nav a');

  function updateActiveLink() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var activeId = '';
    
    // Get current header height dynamically (handling desktop vs mobile)
    var headerEl = document.getElementById('header');
    var offset = headerEl ? headerEl.offsetHeight : 110;

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - offset - 10;
      var sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeId = section.getAttribute('id');
      }
    });

    if (scrollPosition < 50) {
      activeId = 'top';
    }

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      var href = link.getAttribute('href');
      if (href === '#' + activeId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('load', updateActiveLink);
})();
