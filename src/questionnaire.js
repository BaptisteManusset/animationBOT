var image = $(".imagepreview");
$(document).ready(function () {
	$("input").on('change keyup mousemove', function () {
		$("img").attr("src", "assets/img/arretdebus_" + this.value + ".svg");
	});
});