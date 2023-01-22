$(function () {
  $.ajax({
    url: "news.php",
    dataType: "xml",
    success: function (data) {
      var $items = $(data).find("item");
      //console.log($items);
      if ($items.length > 0) {
        $items = $items.slice(0, 10); //[0]부터 10개
        var $ul = $("<ul />");
        //$items.each(function(i,o){})
        $.each($items, function (i, o) {
          var $title = $(o).find("title").text();
          var $link = $(o).find("link").text();
          var $aTag = $("<a />");
          $aTag.attr({ href: $link, target: "_blank" });
          $aTag.text($title);
          var $li = $("<li />");
          $li.append($aTag);
          $ul.append($li);
        });
        $(".wrap").append($ul);
      }
    },
  });
});
