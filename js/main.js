$( document ).ready(function() {
	var clicks = 0;
	$(".dog").click(function() {
  		clicks++;
    $("#click_text").html("The dog has been clicked "+clicks+" times. Woof.");
  });
});