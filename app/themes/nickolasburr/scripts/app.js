/**
 * app.js: Main application JS file.
 */
(function ($) {
	var CV_WRAPPER_SELECTOR = '.main .cv .wrapper';

	/**
	 * Main JS object.
	 */
	var App = {};

	// DOMContentLoaded event handler.
	App.onReady = function () {
		$(CV_WRAPPER_SELECTOR).each(function (index, element) {
			$(element).find('i').click(App.onToggleSection);
			$(element).find('.fieldname').click(App.onToggleSection);
		});
	}

	// Toggle section click event handler.
	App.onToggleSection = function (clickEvent) {
		var target = clickEvent.target;
		var block = $(target).closest('.wrapper').find('.block')[0];
		var button = $(target.parentNode).find('i')[0];

		if ($(block).attr('class').indexOf('hidden') > -1) {
			$(block).attr('class', 'block visible');
			$(button).attr('class', 'fa fa-chevron-up open');
		} else {
			$(block).attr('class', 'block hidden');
			$(button).attr('class', 'fa fa-chevron-down closed');
		}

		$(CV_WRAPPER_SELECTOR).each(function (index, element) {
			var thisArrow = $(element).find('i')[0];
			var thisBlock = $(element).find('.block')[0];

			if (thisArrow && $(thisArrow).attr('class') === $(button).attr('class') && thisArrow !== button) {
				$(thisArrow).attr('class', 'fa fa-chevron-down closed');
			}

			if (thisBlock && $(thisBlock).attr('class') === $(block).attr('class') && thisBlock !== block) {
				$(thisBlock).attr('class', 'block hidden');
			}
		});
	}

	$(document).ready(App.onReady);
}).call(this, jQuery);
