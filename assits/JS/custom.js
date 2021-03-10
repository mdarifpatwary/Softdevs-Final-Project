const typed = new Typed('.typejs', {
  // Waits 1000ms after typing "First"
  strings: ['Web Designer.', 'Freelancer.','17 years old.','Web Developer'],
  			typeSpeed: 60,
  			backSpeed: 60,
  			backdDelay: 1500,
  			loop: true,
});

$(document).ready(function(){
	var mixer = mixitup('.mainraper')
});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	'items': 1,
  	'margin': 20,
  	'loop': true,
  	'nav': true,
  	'dots': true,
  	'autoplay': true,
  	'autoplayTimeout': 1000,
  });
});