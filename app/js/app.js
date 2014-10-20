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

})();


//$('.banner-sostieni').css({ y: -200 });
//$('.banner-sostieni').transition({ y: 0, delay:500, easing:"easeOutQuad" });



$('#HPanmar-banner')
	.css({ y: -300 })
	.transition({ y: 0, easing:"easeOutQuad", delay:400 })
