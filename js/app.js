const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
      }
    });
  });

}

navSlide();

$('.scrollTo').click(function() {
	var getElem = $(this).attr('href');
	var targetDistance = 120;
	if ($(getElem).length) {
		var getOffset = $(getElem).offset().top;
		$('html,body').animate({
			scrollTop: getOffset - targetDistance
		}, 500);
	}
	return false;
});