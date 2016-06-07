$(document).ready(function() {

    /* Model*/
    var model = {
    	currentDog: null,
        dogs: [{
            'name': 'Ralph',
            'imgPath': 'img/basset_hound.jpg',
            'clickCount': 0
        }, {
            'name': 'Blorps & Co.',
            'imgPath': 'img/two_basset_hounds.jpg',
            'clickCount': 0

        }, {
            'name': 'Walter',
            'imgPath': 'img/walt_couch.jpg',
            'clickCount': 0
        }, {
            'name': 'Shadow',
            'imgPath': 'img/shadow.jpg',
            'clickCount': 0
        }, {
            'name': 'Buddy',
            'imgPath': 'img/buddy.jpg',
            'clickCount': 0
        }]
    };

    var octopus = {
    	init: function() {
    		model.currentDog = model.dogs[0];
    		dogListView.init();
    		dogView.init();
    	},
    	getCurrentDog: function() {
    		return model.currentDog;
    	},
    	getDogs: function() {
    		return model.dogs;
    	},
    	setCurrentDog: function(dog) {
    		model.currentDog = dog;
    	},
    	incrementCounter: function() {
    		model.currentDog.clickCount++;
    		dogView.render();
    	}
    };

    var dogView = {
    	init: function() {
    		this.dogElem = $('.dog');
    		this.dogNameElem = $('.dog-name');
    		this.dogImageElem = $('.dog-img');
    		this.dogCountElem = $('.click-count');

    		this.dogImageElem.on('click', function(e) {
    			octopus.incrementCounter();
    		});
    		this.render();
    	},
    	render: function() {
    		var currentDog = octopus.getCurrentDog();
    		this.dogCountElem.text(currentDog.clickCount);
    		this.dogNameElem.text(currentDog.name);
    		this.dogImageElem.attr('src', currentDog.imgPath);
    	}
    };

    var dogListView = {
    	init: function() {
    		this.dogListElem = $('.dog-list');
    		this.render();
    	},
    	render: function() {
    		var dogs = octopus.getDogs();
    		this.dogListElem.html('');
    		for (var i = 0; i < dogs.length; i++) {
    			var dog = dogs[i];
    			var elem = $('<li />');
    			elem.text(dog.name);

    			elem.on('click', function(dog) {
    				return function() {
    					octopus.setCurrentDog(dog);
    					dogView.render();
    				}
    			}(dog));

    			this.dogListElem.append(elem);
    		}
    	}
    };

    // var adminView = {
    // 	init: function() {

    // 	},
    // 	render: function() {

    // 	}
    // }

    octopus.init();
});