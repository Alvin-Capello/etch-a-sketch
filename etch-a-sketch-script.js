$(document).ready(function() {
  var num = 16;
  for (var i = 0; i < num; i++) {
    $("table").append("<tr></tr>");
  }
  for (var j = 0; j < num; j++) {
    $("tr").append("<td></td>");
    $("td").css("width", 960/num);
    $("td").css("height", 960/num);
  }
  $("td").mouseover(function() {
    $(this).css("background-color", "black")
  });
  $("button").on("click", function() {
    var user = prompt("How many squares per side?");
    $("td").remove();
    for (var i = 0; i < user; i++) {
      $("table").append("<tr></tr>");
  }
  for (var k = 0; k < user; k++) {
    $("tr").append("<td></td>");
    $("td").css("width", 960/user);
    $("td").css("height", 960/user);
  }
     $("td").mouseover(function() {
      $(this).css("background-color", "black")
  });
});
});

