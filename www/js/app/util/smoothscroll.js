define(['jquery'], function($) {
	return function ( node, content ) {
  		// setup work goes here...
  		var scrollHandler = function(e) {
			var target = $("[href='"+ $(this).attr('href') +"']")[0];
			if( target.length ) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, {duration: 3000, easing: "easein"});
			}
		};

  		node.addEventListener( 'click', scrollHandler, false );

	  	return {
	    	teardown: function () {
	      	// ...any cleanup work goes here
	      		node.removeEventListener( 'click', scrollHandler, false );
	    	}
	  	};
	};
});
