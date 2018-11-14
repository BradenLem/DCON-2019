$(document).ready(function() {

	// Change CSS based on time of day
	/*
	var href;
	if (7 <= currentTime && currentTime < 20) {
		href = "style-day.css";
	}
	else {
		href = "style-night.css";
	}
	if (document.body) {document.getElementById('time-change').href = href;}
	*/

	// Run countdown clock
	var currentDate = new Date();
	var futureDate = new Date(2019, 2, 22);

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
		navOffset = 75;

		$('html, body').animate({
			
			scrollTop: $(target).offset().top - navOffset
			}, 500);

	});
	
	// Tooltips toggle
	$('[data-toggle="popover"]').popover();
	
	// Carousel initiate
	$('.carousel').carousel({
		interval: 5000
	})

});