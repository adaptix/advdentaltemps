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

	//Position Navs

	//Dentist
	$('#dentistA').click(function(){
		$('#dentist1').hide();
		$('#dentist2').show();
		$('#dentistA').hide();
		$('#dentistB').show();
	});

	$('#dentistB').click(function(){
		$('#dentist1').show();
		$('#dentist2').hide();
		$('#dentistA').show();
		$('#dentistB').hide();
	});

	//Hygienist
	$('#hygienistA').click(function(){
		$('#hygienist1').hide();
		$('#hygienist2').show();
		$('#hygienistA').hide();
		$('#hygienistB').show();
	});

	$('#hygienistB').click(function(){
		$('#hygienist1').show();
		$('#hygienist2').hide();
		$('#hygienistA').show();
		$('#hygienistB').hide();
	});

	//Assistant
	$('#assistantA').click(function(){
		$('#assistant1').hide();
		$('#assistant2').show();
		$('#assistantA').hide();
		$('#assistantB').show();
	});

	$('#assistantB').click(function(){
		$('#assistant1').show();
		$('#assistant2').hide();
		$('#assistantA').show();
		$('#assistantB').hide();
	});



});

$(function() {
		$(".preload").fadeOut(2000, function() {
		$(".content").fadeIn(1000);
	});
});

// Select all links with hashes
$('main a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
