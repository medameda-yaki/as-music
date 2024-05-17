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

$(function(){
  $('.slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    accessibility: true,
    arrows: true,
    swipe: true,
    swipeToSlide: true
});

$('.slide').bind('touchstart', function () {
    return true;
});});
