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
		$(this).addClass('active');
		$('#about2').removeClass('active');
	});

	$('#about2').click(function(){
		$('#about-advdental').hide();
		$('#about-mindy').show();
		$('#about1').removeClass('active');
		$(this).addClass('active');
	});

	//Forms navigation
	$('#form1').click(function(){
		$('#client-form').show();
		$('#applicant-form').hide();
		$(this).addClass('active');
		$('#form2').removeClass('active');
	});

	$('#form2').click(function(){
		$('#client-form').hide();
		$('#applicant-form').show();
		$('#form1').removeClass('active');
		$(this).addClass('active');
	});

});

/*$(function() {
		$(".preload").fadeOut(2000, function() {
		$(".content").fadeIn(1000);
	});
});*/
