(function () {

	var INDEX = 3; // amount of image. start with 0;
	var CURRENT = 1;  // current image in display.
	var PATH = './img/slideshow/'; //image path.
	var STATUS = 0; // help to determin fade or unfade.

	function nextImage (n) {
		console.log('image #' + n);
		CURRENT = (CURRENT === INDEX ? 0 : CURRENT + 1);
		console.log('CURRENT : ' + CURRENT);
		return PATH + CURRENT + '.jpg';
	}

	setInterval(function () {


		console.log('STATUS : ' + STATUS);

		if (STATUS === 0) {

			STATUS = STATUS + 1;
			/*
			$('#slide0')
				.fadeTo(1000, 0)
				.attr('src', nextImage(0));	
			*/

			$('#slide0').fadeTo(800, 0, function () {
				$(this).attr('src', nextImage(0));	
			});
		} else {

			STATUS = STATUS - 1;
			/*
			$('#slide0')
				.fadeTo(1000, 1);
				.each(function () {
					$('#slide1')
					.attr('src', nextImage(1));
				});
			*/

			$('#slide0').fadeTo(800, 1, function () {
				$('#slide1').attr('src', nextImage(1));
			});
		}

	}, 6000);
})();

/*
fade slide0 then reveal slide1
change attr slide0
unfade slide0 then fade slide1
change attr slide 1
fade slide0 then reveal slide1
loop..
*/