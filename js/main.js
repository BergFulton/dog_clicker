$( document ).ready(function() {
	var clicks = 0;
	$(".dog").click(function() {
  		clicks++;
    $("#click_text").html(clicks+" times.");
  });
});