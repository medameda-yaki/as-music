$(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 400, // 399px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});


