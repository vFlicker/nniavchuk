// Menu burger
$('.header__burger, .header__list-item').click(function (event) {
  if ($(window).width() < 767) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  }
});

// Format
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,

  arrows: false,
  dots: false,
  autoplay: true,
  pauseOnHover: false,
  autoplaySpeed: 9000,

  responsive: [{
    breakpoint: 991,
    settings: "unslick"
  }]
});

$(window).resize(function () {
  $('.slider').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange', function () {
  $('.slider').not('.slick-initialized').slick('resize');
});


// Pop-Up
$('[data-modal]').click(function (e) {
  let modal = $(this).attr('data-modal');

  $('body').addClass('hidden');
  $('._modal[data-name="' + modal + '"]').addClass('is-activated');

});

function hideModal(name) {
  $('body').removeClass('hidden');
  $('._modal[data-name="' + name + '"]').removeClass('is-activated');

};


// Form validation
$('.js-form-validate').submit(function () {
  let form = $(this),
    field = [];
  form.find('input[data-validate]').each(function () {
    field.push('input[data-validate]');
    let value = $(this).val(),
      line = $(this).closest('.form-group');
    for (var i = 0; i < field.length; i++) {

      if (!value) {
        line.addClass('some-form__line-required');
        setTimeout(function () {
          line.removeClass('some-form__line-required')
        }.bind(this), 4000);
        event.preventDefault();
      }
    }
  });
});


// Tabs section route
let route = $('.route__list');

route.find('.route__list-item').click(function () {
  $(this).parent().find('.route__list-item').removeClass('is-activated');
  $(this).addClass('is-activated');

  let scrollTop = $(this).offset().top;

  if ($(window).width() < 767) {
    $([document.documentElement, document.body]).animate({
      scrollTop: scrollTop
    }, .5);
  }
});




// Tabs section question
$(".head-button").click(function () {

  $(this).parents(".question__list-item").find(".text").toggle(300);

  if (!$(this).hasClass('is-activated')) {
    $(this).addClass('is-activated');
  } else {
    $(this).removeClass('is-activated');
  }

});

// Links
$(".header__list-item, .footer__item-list").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1500);
});
