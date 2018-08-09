var clock;

$(document).ready(function() {

var currentDate = new Date();
var futureDate = new Date(2019, 0, 1);

var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

clock = $('.countdown').FlipClock(diff, {
	clockFace: 'DailyCounter',
	countdown: true
});

});