$( document ).ready(function() {
	var clicks = 0;
	$(".dog").click(function() {
  		clicks++;
    	$(this).next().find(".click_text").html(clicks + " times.");
  	});

var dogStats = {
    'dogs': [{
        'name': 'Blorps',
        'img': 'img/basset_hound.jpg',
        'count': '0',
        'id': '1',
  }, {
  		'name': 'Ralph',
        'img': 'img/two_basset_hounds.jpg',
        'count': '0',
        'id': '2',
  });

