$(document).ready(function() {

	var dogStuff = {
		dogs: [{
			'name': 'Walter',
			'imgPath': 'img/basset_hound.jpg'
		},
		{
			'name': 'Shadow',
			'imgPath': 'img/two_basset_hounds.jpg'
		}
		]
	}


	var $dogNameEl = $('.dog-name');
	for (var i = 0, len = dogStuff.dogs.length; i < len; i++) {
		$dogNameEl.text(dogStuff.dogs[i].name);

		var $myDogContainer = $('<div class="dog-container" />');
		var $myDogName = $('<h3 class="dog-name">' + dogStuff.dogs[i].name + '</h3>');
		$myDogContainer.insertBefore('footer');
		$myDogName.appendTo('.dog-container');
	}

	// //Building JS to append images to the div
	// var HTMLdogPics = '<img src="%data%" class="dogpic">';
	// var display = function() {
	// 	for (var i = 0, len = dogStuff.dogs.length; i < len; i++) {
	// 		var formattedDogPic = HTMLdogPics.replace('%data%', dogStuff.dogs[i].imgPath);
 //        	$('#dog-container').append(formattedDogPic);
 //        }
 //    };
 //    display();



    // var increment = function() {
    // 	var $clickTextEl = $(this).next().find(".click_text");
    //     $clickTextEl.text(function(i, oldval) {
    //         return ++oldval;
    //     });
    // }

    // $(".dog").on('click', increment);
});

//for (var i = 0, len = work.jobs.length; i < len; i++) {
