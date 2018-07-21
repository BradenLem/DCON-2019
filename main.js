$(document).ready(function() {

	// Run countdown clock
	var currentDate = new Date();
	var futureDate = new Date(2019, 0, 1);

	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	var clock = $('.countdown').FlipClock(diff, {

		clockFace: 'DailyCounter',
		countdown: true

	});

	// Animate navigation bar scrolling
	$("nav ul li a[href^='#']").on('click', function(e) {

		var target = this.hash;

		e.preventDefault();

		var navOffset;
		navOffset = 50;

		$('html, body').animate({
			
			scrollTop: $(target).offset().top - navOffset
			}, 600);

	});

});