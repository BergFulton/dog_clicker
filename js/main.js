$( document ).ready(function() {
	var clicks = 0;
	$(".dog").click(function() {
  		clicks++;
    	$(this).next().find(".click_text").html(clicks + " times.");
  	});

// $("#pics").append("<p>This thing here.</p>");
// $("#pics").prepend("<p>Dog Name</p>");


});

