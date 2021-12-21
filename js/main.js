"use strict";

(function ($) {
  $(".navbar__lang--dropdown li a").each(function (index) {
    $(this).on('click', () => {
      $('.navbar__lang--current span').text($(this).text())
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
    responsive: [{
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
      responsive: [{
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      }, ],
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


  $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  function initFilterSliders() {

    var sliderSubmitTimeout;

    $('.js-filter-slider').each(function (ind, elem) {
      var $sliderBlock = $(elem);

      var $slider = $sliderBlock.find('.filter-range-slider');

      var $minInput = $sliderBlock.find('.filter-range-slider-min');
      var $maxInput = $sliderBlock.find('.filter-range-slider-max');

      var min = parseInt($slider.data('min'));
      var max = parseInt($slider.data('max'));

      var minValue = $minInput.val() ? parseInt($minInput.val()) : min;
      var maxValue = $maxInput.val() ? parseInt($maxInput.val()) : max;

      $minInput.val(minValue);
      $maxInput.val(maxValue);

      $minInput.keyup(function () {
        var min = parseInt($(this).val());
        var max = parseInt($slider.slider('values')[1]);
        $slider.slider('values', [min, max]);
      });

      $maxInput.keyup(function () {
        var min = parseInt($slider.slider('values')[0]);
        var max = parseInt($(this).val());
        $slider.slider('values', [min, max]);
      });

      $slider.slider({
        range: true,
        min: min,
        max: max,
        values: [minValue, maxValue],
        slide: function (event, ui) {
          $minInput.val(ui.values[0]);
          $maxInput.val(ui.values[1]);
          clearTimeout(sliderSubmitTimeout);

          sliderSubmitTimeout = setTimeout(function () {
            submitEFilter();
          }, 1000);

        }
      });
    })
  }
  initFilterSliders();

  $('.btn-aside').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('mobile-filter-open');

    $('.shop-aside .close').on('click', function (e) {
      e.preventDefault();
      $('body').removeClass('mobile-filter-open');
    });

    $('.sidebar .close').on('click', function (e) {
      e.preventDefault();
      $('body').removeClass('mobile-filter-open');
    });
  });

  $('.js-work').slick({
    rows: 2,
    arrows: true,
    prevArrow: "<button class='slider-arrow slider-arrow__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#999CA7' stroke-width='2' stroke-linejoin='round'/></svg></button>",
    nextArrow: "<button class='slider-arrow slider-arrow__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#999CA7' stroke-width='2' stroke-linejoin='round'/></svg></button>",
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    }, ],
  });
})(jQuery)
