'use strict';
var padlock = $(".padlock");
var ticket = $(".ticket");
$(".triggerpadlock").click(function () {
	console.log("click");
	$(".mobile-container").html(padlock);
	$(padlock).show();
	setTimeout(function () {
		$(".mobile-container").append(ticket);
		$(padlock).animate({
			opacity: 0
		});
		setTimeout(function () {
			$(".mobile-container .padlock").animate({
				opacity: 0,
				transform: scale(0.1)
			});


		}, 1000);
	}, 2000);
});

$(".reset").click(function () {
	$(".mobile-container svg").append(".hidden");
});
