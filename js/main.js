$(document).ready(function() {

/* Model*/
	var dogStuff = {
		dogs: [{
			'name': 'Ralph',
			'imgPath': 'img/basset_hound.jpg',
			'clickCount': 0
		},
		{
			'name': 'Blorps & Co.',
			'imgPath': 'img/two_basset_hounds.jpg',
			'clickCount': 0

		},
		{
			'name': 'Walter',
			'imgPath': 'img/walt_couch.jpg',
			'clickCount': 0
		},
		{
			'name': 'Shadow',
			'imgPath': 'img/shadow.jpg',
			'clickCount': 0
		},
		{
			'name': 'Buddy',
			'imgPath': 'img/buddy.jpg',
			'clickCount': 0
		}
		]
	}

	// for each of the dogs, build their containers & set up their markup
	$.each(dogStuff.dogs, function(i, dog) {
		var $dogContainer = $('<div class="dog-container" />');
		var $dogName = $('<h3 class="dog-name" />');
		var $dogUL = $('.dog-ul');
		var $dogNameItem = $('<li class="dog-name-item" />');
		var $dogImage = $('<img class="dog" />');
		// var $toggleWrapper = $('<div class="toggle-wrapper" />');
		var $clickContainer = $('<div class="clicks" />');
		var $clickText = $('<p>You have clicked the dog:</p>');
		var $clickCounterContainer = $('<p class="click-text" />');
		var $dogView = $('<div class ="dog-view" />')
		
		// put the markup in the right place on the page
		$dogContainer.appendTo('.dog-containers-group');
		$dogName.text(dog.name).appendTo($dogNameItem);
		// $toggleWrapper.appendTo($dogNameItem);
		// $dogImage.attr('src', dog.imgPath).appendTo($toggleWrapper);
		$dogNameItem.appendTo($dogUL);

});

	

	// var toggleDogView = function() {
	$('.dog-name').on('click', function() {
			// $clickContainer.appendTo($toggleWrapper);
		$clickText.appendTo($clickContainer);
		$clickCounterContainer.appendTo($clickContainer);
		$dogView.appendTo('.dog-view-group');
		$dogName.text(dog.name).appendTo($dogView);
		$dogImage.attr('src', dog.imgPath).appendTo($dogView);
		$clickContainer.appendTo($dogView);
	});
	});

	// toggleDogView();

    var increment = function() {
    	var $clickTextEl = $(this).next().find(".click-text");
        $clickTextEl.text(function(i, oldval) {
            return ++oldval;
        });
    }

    $(".dog").on('click', increment);
});


// build the click counters
