$('.carousel[data-type="multi"] .item').each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < 2; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});

$(function () {
  $(".slider-sp").slick({
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 540, // 399px以下のサイズに適用
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0",
  
        },
      },
    ],
  });
});