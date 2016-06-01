$(document).ready(function() {

	var dogStuff = {
		dogs: [{
			'name': 'Ralph',
			'imgPath': 'img/basset_hound.jpg'
		},
		{
			'name': 'Blorps & Co.',
			'imgPath': 'img/two_basset_hounds.jpg'
		},
		{
			'name': 'Walter',
			'imgPath': 'img/walt_couch.jpg'
		},
		{
			'name': 'Shadow',
			'imgPath': 'img/shadow.jpg'
		},
		{
			'name': 'Buddy',
			'imgPath': 'img/buddy.jpg'
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
		var $toggleWrapper = $('<div class="toggle-wrapper" />');
		var $clickContainer = $('<div class="clicks" />');
		var $clickText = $('<p>You have clicked the dog:</p>');
		var $clickCounterContainer = $('<p class="click-text" />');
		
		// put the markup in the right place on the page
		$dogContainer.appendTo('.dog-containers-group');
		$dogName.text(dog.name).appendTo($dogNameItem);
		$toggleWrapper.appendTo($dogNameItem);
		$dogImage.attr('src', dog.imgPath).appendTo($toggleWrapper);
		$dogNameItem.appendTo($dogUL);

		// // build the click counters
		$clickContainer.appendTo($toggleWrapper);
		$clickText.appendTo($clickContainer);
		$clickCounterContainer.appendTo($clickContainer);
	});

	var toggleDog = function() {
		$('.dog-name').on('click', function(e) {
			$(this).next().toggleClass('is-visible');
		});
	};

	toggleDog();

    var increment = function() {
    	var $clickTextEl = $(this).next().find(".click-text");
        $clickTextEl.text(function(i, oldval) {
            return ++oldval;
        });
    }

    $(".dog").on('click', increment);
});
