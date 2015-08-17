$(document).ready(function() {
	$('.header').mouseenter(function() {
		$(this).css("border-color", "#005AB6")
	});

	$(".header").mouseleave(function(){
		$(this).css("border-color", "white")
	});
})
