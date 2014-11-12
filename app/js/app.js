var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,
		
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);



(function() {

	'use strict';
	app.init();
	masonryControl();
	
})();


$('#HPanmar-banner')
	.css({ y: -300 })
	.transition({ y: 0, easing:'easeOutQuad', delay:400 });

// Masonry version */

$(window).load(function(){   
	var masnry_container = document.querySelector('#HParticoli');
	var msnry = new Masonry( masnry_container, {		
  		gutter:18,
  		itemSelector: '.articolo'
	});
});

$( window ).resize(function() {
	console.log('screen size: ' + $(window).width());
	masonryControl();
});	

function masonryControl() {
	var fi  = $(window).width();
	(fi<550) ? $('.articolo').css('width','100%'):
	(fi>=550 && fi<=900) ? $('.articolo').css('width','45%'):
	(fi>900) ? $('.articolo').css('width','32%'):
	'dimensione non prevista';
}




