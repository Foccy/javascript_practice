$(window).mousemove(function (e) {
  const pointer = {
    x: e.clientX,
    y: e.clientY,
  }
  $("#m1").css({ top: pointer.y / 2, left: pointer.x / 3 })
  $("#cursor").css({ top: pointer.y, left: pointer.x, "margin-left": - pointer.x / 2, "margin-top": - pointer.y / 2 })
})