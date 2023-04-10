$(function () {
  var $button = $(".gallery a"),
    $target = $("#lightbox-overlay"),
    $targetImg = $target.find("img");

  $button.click(function () {
    //큰 이미지주소
    var newImg = $(this).find("img").attr("data-lightbox");
    $target.addClass("visible");
    $targetImg.attr("src", newImg);
  });
  $target.click(function () {
    var newTargetImg = $(this).find("img").attr("data-lightbox");
    $target.removeClass("visible");
    $targetImg.attr("src", newTargetImg);
  });
});
