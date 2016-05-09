$( document ).ready(function() {
	var clicks = 0;
	$(".dog").click(function() {
  		clicks++;
    $("#values").html("My current count is: "+clicks);
  });
});