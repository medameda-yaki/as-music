$(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    dots: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 400, // 399px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".main-slider").on("init", function(slick){
    // スライダーオブジェクトを取得
    slick = $(slick.currentTarget);
    // 動画スライドの再生(1枚目のスライドが動画である場合)
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
    // iframeの埋め込み動画の表示サイズと位置を決定
    resizePlayer(iframes, 16/9);
  });

  $(".main-slider").on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    // 現在の動画スライドに対して一時停止させる(カレントが動画スライドである場合)
    playPauseVideo(slick,"pause");
  });

  $(".main-slider").on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    // 現在の動画スライドに対して再生を開始(カレントが動画スライドである場合)
    playPauseVideo(slick,"play");
  });
  
});

$(function () {
  function resizePlayer(iframes, ratio) {
    if (!iframes[0]) return;
    var win = $(".main-slider"),
        width = win.width(),
        playerWidth,
        height = win.height(),
        playerHeight,
        ratio = ratio || 16/9;
   
    iframes.each(function(){
      var current = $(this);
      if (width / ratio < height) {
        playerWidth = Math.ceil(height * ratio);
        current.width(playerWidth).height(height).css({
          left: (width - playerWidth) / 2,
           top: 0
          });
      } else {
        playerHeight = Math.ceil(width / ratio);
        current.width(width).height(playerHeight).css({
          left: 0,
          top: (height - playerHeight) / 2
        });
      }
    });
  }
  



});
