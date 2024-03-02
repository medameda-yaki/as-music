$(function () {
  // ハンバーガーボタンクリックで実行
  $(".drawer__button").click(function () {
    $(this).toggleClass("active");
    $(".drawer__nav").toggleClass("active");
  });

  $(".drawer__nav__link").click(function () {
    $(".drawer__button").removeClass("active");
    $(".drawer__nav").removeClass("active");
  });

  // ページ内スクロール
  $('a[href^="#"]').click(function () {
    const speed = 400;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // function

});

