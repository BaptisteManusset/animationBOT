'use strict';
var padlock = $(".padlock");
var ticket = $(".ticket");
$(".triggerpadlock").click(function () {
	console.log("click");
	$(".mobile-container").html(padlock);
	$(padlock).show();
	setTimeout(function () {
		$(".mobile-container").append(ticket);
		setTimeout(function () {

			$(".mobile-container .padlock").animate({
				opacity: 0
			});
		}, 1000);
	}, 3000);
});