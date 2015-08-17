$(document).ready(function() {
	$('.header').mouseenter(function() {
		$(this).css("background-color", "#FEB729")
		$(this).css("color", "black")
	});

	$(".header").mouseleave(function(){
		$(this).css("background-color", "white")
		$(this).css("color", "#005AB6;")
	});
})
