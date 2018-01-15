$(document).ready(function(){

	$('#nav-open').click(function(){
		$('#nav-menu').show();
		$('#nav-list ul').delay(100).fadeIn();
		$('main').hide();
	});

	$('#nav-close').click(function(){
		$('#nav-menu').fadeOut();
		$('#nav-list ul').fadeOut();
		$('main').show();
	});

	$('#nav-list li a').click(function(){
		$('#nav-menu').hide();
		$('main').show();
	})

});

$(function() {
		$(".preload").fadeOut(2000, function() {
		$(".content").fadeIn(1000);
	});
});
