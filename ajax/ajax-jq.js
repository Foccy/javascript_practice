$(function () {
  $.ajax({
    url: "./MOCK_DATA (1).json", //파일위치
    dataType: "json", //파일형식
    success: function (data) {
      if (data.length > 0) {
        //데이터가 있을 경우
        var tb = $("<table/>");
        for (var i in data) {
          var $id = data[i].id;
          var $first_name = data[i].$first_name;
          var $last_name = data[i].$last_name;
          var $email = data[i].$email;
          var $gender = data[i].$gender;
          var row = $("<tr/>").append($("<td/>").text($id), "<td/>".text($first_name), "<td/>".text($last_name), "<td/>".text($email), "<td/>".text($data));

          console.log(row1);
        }
        $(".wrap").append(tb);
      }
    },
  });
});
