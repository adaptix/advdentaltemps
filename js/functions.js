$(document).ready(function(){

	// Navigation
	$('#nav-open').click(function(){
		$('#nav-menu').show();
		$('#nav-list ul').delay(100).fadeIn();
	});

	$('#nav-close').click(function(){
		$('#nav-menu').hide();
		$('#nav-list ul').hide();
	});

	$('#nav-list li a').click(function(){
		$('#nav-menu').hide();
	});

	//About navigation
	$('#about1').click(function(){
		$('#about-advdental').show();
		$('#about-mindy').hide();
	});

	$('#about2').click(function(){
		$('#about-advdental').hide();
		$('#about-mindy').show();
	});

	//Forms navigation
	$('#form1').click(function(){
		$('#client-form').show();
		$('#applicant-form').hide();
	});

	$('#form2').click(function(){
		$('#client-form').hide();
		$('#applicant-form').show();
	});

});

/*$(function() {
		$(".preload").fadeOut(2000, function() {
		$(".content").fadeIn(1000);
	});
});*/
