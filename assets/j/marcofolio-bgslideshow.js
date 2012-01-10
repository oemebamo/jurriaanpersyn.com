/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/

// Speed of the automatic slideshow
var slideshowSpeed = 5000;

// Variable to store the images we need to set as background
// which also includes some text and url's.
var photos = [ {
		"title" : "Clarion Alley, San Francisco",
		"image" : "clarionalley.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/2542468944/"
	}, {
		"title" : "Bue, Chase &amp; Resto",
		"image" : "sommigeharten.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/3683173746/"
	}, {
		"title" : "REAB",
		"image" : "reab.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6117280435/"
	}, {
		"title" : "Bue &amp; Faif",
		"image" : "buefaif.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6117280435/"
	}, {
		"title" : "Bue The Warrior",
		"image" : "bue_groentjes.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/5897021312/"
	}, {
		"title" : "Crezy Freaks",
		"image" : "crezyfreaks.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6094280736/"
	}, {
		"title" : "Eyes B",
		"image" : "eyesb.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6117840042/"
	}, {
		"title" : "Kappellekerk, Brussels",
		"image" : "iamgod.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/4646571783/"
	}, {
		"title" : "Insa",
		"image" : "insa.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6191726126/"
	}, {
		"title" : "Insa",
		"image" : "insa2.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6191208277/"
	}, {
		"title" : "Interbeton, Gent",
		"image" : "interbeton.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6094413306/"
	}, {
		"title" : "James Cochran",
		"image" : "jamescochran.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6191975522/"
	}, {
		"title" : "Mr. Leenknecht",
		"image" : "leenknecht.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/5900536005/"
	}, {
		"title" : "Mymo",
		"image" : "mymo.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6191391891/"
	}, {
		"title" : "Bue &amp; Friends",
		"image" : "nachtrust.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/5896483127/"
	}, {
		"title" : "Resto",
		"image" : "resto_lettermachine.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6093910924/"
	}, {
		"title" : "Resto",
		"image" : "resto.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6189032380/"
	}, {
		"title" : "Resto",
		"image" : "resto_astronaut.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/4473563539/"
	}, {
		"title" : "Resto",
		"image" : "resto_klak.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/3725259270/"
	}, {
		"title" : "Roa",
		"image" : "roa.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/4646569291/"
	}, {
		"title" : "Roa",
		"image" : "roa_bird.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/4474350256/"
	}, {
		"title" : "Roa",
		"image" : "roa_splatsh.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/4489508430/"
	}, {
		"title" : "Roa",
		"image" : "roa_piep.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/3922634412/"
	}, {
		"title" : "Bue, Oli-B, Billy &amp; Pest",
		"image" : "roodkapje.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6191986236/"
	}, {
		"title" : "Bue, Oli-B, Billy &amp; Pest",
		"image" : "roodkapje2.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6191983764/"
	}, {
		"title" : "Steve Locatelli &amp; Polak",
		"image" : "stevelocatelli.jpg",
		"url" : "http://www.flickr.com/photos/oemebamo/6191473255/"
	}
];



$(document).ready(function() {
		
	var interval;
	var activeContainer = 1;	
	var currentImg = 0;
	var animating = false;
	var navigate = function(direction) {
		// Check if no animation is running. If it is, prevent the action
		if (animating) {
			return;
		}
		
		// Check which current image we need to show
		currentImg = Math.floor(Math.random() * (photos.length + 1));
		if (currentImg > photos.length + 1) {
			currentImg = photos.length
		}
		
		// Check which container we need to use
		var currentContainer = activeContainer;
		if(activeContainer == 1) {
			activeContainer = 2;
		} else {
			activeContainer = 1;
		}
		
		showImage(photos[currentImg - 1], currentContainer, activeContainer);
		
	};
	
	var currentZindex = -1;
	var showImage = function(photoObject, currentContainer, activeContainer) {
		animating = true;
		
		// Make sure the new container is always on the background
		currentZindex--;
		
		// Set the background image of the new active container
		$("#headerimg" + activeContainer).css({
			"background-image" : "url(assets/i/streetart/slideshow/" + photoObject.image + ")",
			"display" : "block",
			"z-index" : currentZindex
		});
		
		// Set the new header text
		$(".pictured")
			.attr("href", photoObject.url)
			.html("Pictured: " + photoObject.title);
		
		
		// Fade out the current container
		// and display the header text when animation is complete
		$("#headerimg" + currentContainer).fadeOut(function() {
			setTimeout(function() {
				animating = false;
			}, 500);
		});
	};
	
	var stopAnimation = function() {
		// Clear the interval
		clearInterval(interval);
	};
	
	// We should statically set the first image
	// navigate("next");
	
	// Start playing the animation
	interval = setInterval(function() {
		navigate("next");
	}, slideshowSpeed);
	
});