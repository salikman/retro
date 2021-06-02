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
      infinite: false,
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

  // Init fancybox
  // =============
  var selector = ".slick-slide:not(.slick-cloned)";

  // Attach custom click event on cloned elements,
  // trigger click event on corresponding link
  $(document).on("click", ".slick-cloned", function (e) {
    $(selector)
      .eq(
        ($(e.currentTarget).attr("data-slick-index") || 0) % $(selector).length
      )
      .trigger("click.fb-start", {
        $trigger: $(this),
      });

    return false;
  });

  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    // prevArrow:
    //   '<button type="button" class="single-gallery-prev"><i class="fa fa-chevron-left"></i></button>',
    // nextArrow:
    //   '<button type="button" class="single-gallery-next"><i class="fa fa-chevron-right"></i></button>',
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      dotsClass: "dots dots-offset",

      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });


  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
})(jQuery)