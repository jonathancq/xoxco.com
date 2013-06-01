$(function() {

	// enable Aware.js, and add new flags to any sort of post-like content	
 	$('.tile').aware();
	var delay = 500;
	$('ul#animated_logo li').each(function() {
		(function(el) {
			setTimeout(function() { $(el).css('top','20px'); },delay);
		})(this);							
		delay = delay + 100;
	
	});
	
	setTimeout(function() { 

			$('ul#animated_logo li').css('-webkit-transition-duration','0.1s');
			$('ul#animated_logo').on('mouseenter','li',function() {
				$(this).css('top','0px');
				(function(el) {
					setTimeout(function() { $(el).css('top','20px'); },100);
				})(this)		

			});

	
	
	},delay); 	
	
});
