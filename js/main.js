"use strict";

(function($) {
    $( ".navbar__lang--dropdown li a" ).each(function( index ) {
		$( this ).on('click', () => {
			$('.navbar__lang--current span').text($( this ).text())
		})
	});

	$('.navbar__collapse').click(() => {
        $('#nav').toggleClass('open-menu')
    })

	$('.js-slider').slick({
		slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'dots',
        fade: true,
        speed: 500,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
		adaptiveHeight: true
	})

    $('.js-gallery').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1210,
              settings: {
                slidesToShow: 4,
                
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                
              }
            }
        ]
    })
})(jQuery)