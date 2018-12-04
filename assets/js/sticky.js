$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.nav').addClass('menu-fixed');
			$('.logo-small').addClass('display');
		} else {
			$('.nav').removeClass('menu-fixed');
			$('.logo-small').removeClass('display');
		}
	});

});