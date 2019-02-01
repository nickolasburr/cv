/**
 * app.js: Main application JS file.
 */
(function ($) {
	var CV_WRAPPER_ROW_SELECTOR = '.main .cv .wrapper .row';

	/**
	 * Main JS object.
	 */
	var App = {};

	// DOMContentLoaded event handler.
	App.onReady = function () {
		$('.main .cv .wrapper .row').each(function () {
			$(this).find('i').click(App.onToggleSection);
			$(this).find('.fieldname').click(App.onToggleSection);
		});
	}

	// Toggle section click event handler.
	App.onToggleSection = function (clickEvent) {
		var buttonClass, blockClass;
		var block = $(this).closest('.wrapper').find('.block');
		var button = this;
		var currentClass = block.attr('class');

		if (currentClass.indexOf('hidden') > -1) {
			blockClass  = 'block visible';
			buttonClass = 'fa fa-chevron-up open';
		} else {
			blockClass  = 'block hidden';
			buttonClass = 'fa fa-chevron-down closed';
		}

		$(block).attr('class', blockClass);
		$(button).attr('class', buttonClass);

		$(CV_WRAPPER_ROW_SELECTOR).each(function (index, element) {
			var thisArrow = $(element).find('i');
			var thisBlock = $(element).find('.block');

			if ($(thisArrow).attr('class') === $(button).attr('class') && thisArrow !== button) {
				$(thisArrow).attr('class', 'fa fa-chevron-down closed');
			}

			if ($(thisBlock).attr('class') === $(block).attr('class') && thisBlock !== block) {
				$(thisBlock).attr('class', 'block hidden');
			}
		});
	}

	$(document).ready(App.onReady);
}).call(this, jQuery);
