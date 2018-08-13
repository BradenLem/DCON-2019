$(document).ready(function() {

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
		navOffset = 80;

		$('html, body').animate({
			
			scrollTop: $(target).offset().top - navOffset
			}, 600);

	});
	
	// FAQ accordion transitions
	var acc1 = document.getElementsByClassName("faq-question");
	var i;

	for (i = 0; i < acc1.length; i++) {
		
		acc1[i].addEventListener("click", function() {
		
		// this.classList.toggle("active");
		
		var answer = this.nextElementSibling;
		if (answer.style.maxHeight) {
			answer.style.maxHeight = null;
		}
		else {
			answer.style.maxHeight = answer.scrollHeight + "px";
		} 
		});
  
	}
	
	// Documents accordion transitions
	var acc2 = document.getElementsByClassName("documents-tab");
	var j;

	for (j = 0; j < acc2.length; j++) {
		
		acc2[j].addEventListener("click", function() {
		
		// this.classList.toggle("active");
		
		var list = this.nextElementSibling;
		if (list.style.maxHeight) {
			list.style.maxHeight = null;
		}
		else {
			list.style.maxHeight = list.scrollHeight + "px";
		} 
		});
  
	}

});