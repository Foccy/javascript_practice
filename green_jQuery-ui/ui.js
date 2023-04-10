$(function () {
  $("#departure").datepicker({
    dateFormat: "yy-mm-dd", //input의 value 표시 방식
    showOtherMonths: true,
    // showWeek: true,
    // showMonthAfterYear: true,
    changeYear: true,
    changeMonth: false,
    showOn: "both",
    buttonImage: "https://cdn-icons-png.flaticon.com/512/833/833593.png",
    buttonImageOnly: true,
    yearSuffix: "년",
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    showAnim: "bounce",
  });
  $("#airport").autocomplete({
    source: airports,
  });
  $("#meal").selectmenu({
    width: 400,
  });
  $("#bags").css("display", "block").buttonset();
  $("#seatTypes").buttonset();
  $("#next").button({
    icons: { secondary: "ui-icon-circle-arrow-e" },
  });
  $("#telme").dialog({
    autoOpen: false,
    width: 500,
  });
  $("#telmeLink").click(function (e) {
    e.preventDefault();
    $("#telme").dialog("open", $("p[title]").tooltip());
  });
});
