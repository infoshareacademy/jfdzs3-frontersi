(function() {
    const scrollTopLink = document.querySelector('.backtop');

    function scrollTracking() {
      let scrolled = window.pageYOffset;
  
      if (scrolled > 200) {
        scrollTopLink.classList.add('backtop-show');
      }
      if (scrolled < 200) {
        scrollTopLink.classList.remove('backtop-show');
      }
    }

    window.addEventListener('scroll', scrollTracking);
  })();


